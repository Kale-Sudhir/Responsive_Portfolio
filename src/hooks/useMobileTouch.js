import { useCallback, useRef, useEffect } from 'react';

const useMobileTouch = () => {
  const touchStartTime = useRef(0);
  const touchStartPosition = useRef({ x: 0, y: 0 });
  const isScrolling = useRef(false);

  const handleTouchStart = useCallback((e) => {
    touchStartTime.current = Date.now();
    touchStartPosition.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    isScrolling.current = false;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchStartPosition.current) return;
    
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartPosition.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartPosition.current.y);
    
    // Determine if user is scrolling
    if (deltaY > deltaX && deltaY > 10) {
      isScrolling.current = true;
    }
  }, []);

  const handleTouchEnd = useCallback((callback) => {
    return (e) => {
      const touchDuration = Date.now() - touchStartTime.current;
      const touch = e.changedTouches[0];
      
      if (!touchStartPosition.current) return;
      
      const deltaX = Math.abs(touch.clientX - touchStartPosition.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartPosition.current.y);
      
      // Only trigger if it's a tap (not a scroll) and within reasonable distance
      if (!isScrolling.current && deltaX < 10 && deltaY < 10 && touchDuration < 500) {
        e.preventDefault();
        callback(e);
      }
    };
  }, []);

  // Optimize scroll performance
  const handleScroll = useCallback((callback, throttleMs = 16) => {
    let ticking = false;
    
    return (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback(e);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  // Detect mobile device
  const isMobile = useCallback(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.maxTouchPoints && navigator.maxTouchPoints > 1);
  }, []);

  // Optimize for mobile network
  const isSlowConnection = useCallback(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return connection.effectiveType === 'slow-2g' || 
             connection.effectiveType === '2g' ||
             connection.saveData === true;
    }
    return false;
  }, []);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleScroll,
    isMobile,
    isSlowConnection
  };
};

export default useMobileTouch;
