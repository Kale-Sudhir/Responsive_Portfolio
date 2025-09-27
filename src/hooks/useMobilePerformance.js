import { useEffect, useState, useCallback } from 'react';

const useMobilePerformance = () => {
  const [performanceData, setPerformanceData] = useState({
    isMobile: false,
    connectionType: 'unknown',
    memoryUsage: 0,
    batteryLevel: null,
    isLowEndDevice: false
  });

  // Detect mobile device
  const detectMobile = useCallback(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.maxTouchPoints && navigator.maxTouchPoints > 1);
  }, []);

  // Detect connection type
  const detectConnection = useCallback(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
    }
    return { effectiveType: 'unknown' };
  }, []);

  // Detect low-end device
  const detectLowEndDevice = useCallback(() => {
    const hardwareConcurrency = navigator.hardwareConcurrency || 1;
    const deviceMemory = navigator.deviceMemory || 4;
    const connection = detectConnection();
    
    return (
      hardwareConcurrency <= 2 ||
      deviceMemory <= 2 ||
      connection.effectiveType === 'slow-2g' ||
      connection.effectiveType === '2g' ||
      connection.saveData === true
    );
  }, [detectConnection]);

  // Monitor memory usage
  const getMemoryUsage = useCallback(() => {
    if (performance.memory) {
      return {
        used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
      };
    }
    return { used: 0, total: 0, limit: 0 };
  }, []);

  // Get battery level if available
  const getBatteryLevel = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await navigator.getBattery();
        return {
          level: Math.round(battery.level * 100),
          charging: battery.charging,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime
        };
      } catch (error) {
        console.warn('Battery API not supported:', error);
        return null;
      }
    }
    return null;
  }, []);

  // Optimize for mobile performance
  const optimizeForMobile = useCallback(() => {
    const isMobile = detectMobile();
    const connection = detectConnection();
    const memory = getMemoryUsage();
    const isLowEnd = detectLowEndDevice();

    setPerformanceData({
      isMobile,
      connectionType: connection.effectiveType,
      memoryUsage: memory.used,
      batteryLevel: null, // Will be set asynchronously
      isLowEndDevice: isLowEnd
    });

    // Get battery level asynchronously
    getBatteryLevel().then(battery => {
      setPerformanceData(prev => ({ ...prev, batteryLevel: battery }));
    });

    // Log performance recommendations
    if (isMobile) {
      console.log('Mobile device detected - applying optimizations');
      
      if (isLowEnd) {
        console.log('Low-end device detected - enabling performance mode');
        // Disable animations for low-end devices
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
      }
      
      if (connection.saveData) {
        console.log('Data saver mode detected - reducing image quality');
      }
    }
  }, [detectMobile, detectConnection, getMemoryUsage, detectLowEndDevice, getBatteryLevel]);

  useEffect(() => {
    optimizeForMobile();

    // Monitor connection changes
    if ('connection' in navigator) {
      const connection = navigator.connection;
      const handleConnectionChange = () => {
        optimizeForMobile();
      };

      connection.addEventListener('change', handleConnectionChange);
      return () => connection.removeEventListener('change', handleConnectionChange);
    }
  }, [optimizeForMobile]);

  // Get performance recommendations
  const getRecommendations = useCallback(() => {
    const recommendations = [];
    
    if (performanceData.isLowEndDevice) {
      recommendations.push('Enable performance mode');
      recommendations.push('Reduce animation complexity');
      recommendations.push('Use lower quality images');
    }
    
    if (performanceData.connectionType === 'slow-2g' || performanceData.connectionType === '2g') {
      recommendations.push('Enable data saver mode');
      recommendations.push('Preload critical resources only');
    }
    
    if (performanceData.memoryUsage > 50) {
      recommendations.push('Reduce memory usage');
      recommendations.push('Implement virtual scrolling');
    }
    
    if (performanceData.batteryLevel && performanceData.batteryLevel.level < 20) {
      recommendations.push('Enable battery saver mode');
      recommendations.push('Reduce background processing');
    }
    
    return recommendations;
  }, [performanceData]);

  return {
    ...performanceData,
    getRecommendations,
    optimizeForMobile
  };
};

export default useMobilePerformance;
