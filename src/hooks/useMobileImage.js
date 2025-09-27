import { useState, useEffect, useCallback } from 'react';

const useMobileImage = (src, fallbackSrc) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  // Detect device pixel ratio for high-res images
  const getDevicePixelRatio = useCallback(() => {
    return window.devicePixelRatio || 1;
  }, []);

  // Generate responsive image URL
  const getResponsiveImageUrl = useCallback((originalSrc, width, quality = 80) => {
    if (!originalSrc) return originalSrc;
    
    // For external images, try to optimize
    if (originalSrc.includes('picsum.photos')) {
      const dpr = getDevicePixelRatio();
      const optimizedWidth = Math.min(width * dpr, 800); // Cap at 800px for mobile
      return `${originalSrc}&w=${optimizedWidth}&q=${quality}`;
    }
    
    return originalSrc;
  }, [getDevicePixelRatio]);

  // Optimize image based on screen size
  const optimizeForMobile = useCallback(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;
    
    if (isMobile) {
      const optimizedSrc = getResponsiveImageUrl(src, screenWidth, 70);
      setImageSrc(optimizedSrc);
    } else {
      setImageSrc(src);
    }
  }, [src, getResponsiveImageUrl]);

  useEffect(() => {
    optimizeForMobile();
  }, [optimizeForMobile]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
    setIsError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setIsError(true);
    setIsLoaded(false);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  }, [fallbackSrc]);

  // Lazy loading with intersection observer
  const [isInView, setIsInView] = useState(false);
  const imgRef = useCallback((node) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
      observer.observe(node);
    }
  }, []);

  return {
    imageSrc: isInView ? imageSrc : null,
    isLoaded,
    isError,
    handleImageLoad,
    handleImageError,
    imgRef,
    isInView
  };
};

export default useMobileImage;
