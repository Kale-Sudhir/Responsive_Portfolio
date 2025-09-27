import { useEffect, useRef } from 'react';

const usePerformanceMonitor = (componentName) => {
  const renderStartTime = useRef(performance.now());
  const mountTime = useRef(null);

  useEffect(() => {
    // Measure component mount time
    mountTime.current = performance.now();
    const mountDuration = mountTime.current - renderStartTime.current;
    
    console.log(`${componentName} mounted in ${mountDuration.toFixed(2)}ms`);
    
    // Measure memory usage if available
    if (performance.memory) {
      console.log(`${componentName} memory usage:`, {
        used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + 'MB',
        total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024) + 'MB',
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
      });
    }
  }, [componentName]);

  const measureRender = (operationName) => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      console.log(`${componentName} - ${operationName}: ${(endTime - startTime).toFixed(2)}ms`);
    };
  };

  return { measureRender };
};

export default usePerformanceMonitor;
