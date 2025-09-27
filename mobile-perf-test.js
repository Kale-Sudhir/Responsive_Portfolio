// Mobile Performance Test Script
const mobilePerformanceTest = {
  // Test mobile-specific performance metrics
  runTests: () => {
    console.log('🚀 Starting Mobile Performance Tests...');
    
    // Test 1: Touch responsiveness
    mobilePerformanceTest.testTouchResponsiveness();
    
    // Test 2: Scroll performance
    mobilePerformanceTest.testScrollPerformance();
    
    // Test 3: Memory usage
    mobilePerformanceTest.testMemoryUsage();
    
    // Test 4: Network conditions
    mobilePerformanceTest.testNetworkConditions();
    
    // Test 5: Battery impact
    mobilePerformanceTest.testBatteryImpact();
    
    console.log('✅ Mobile Performance Tests Complete');
  },

  testTouchResponsiveness: () => {
    const startTime = performance.now();
    let touchCount = 0;
    
    const handleTouch = () => {
      touchCount++;
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      
      console.log(`📱 Touch Response Time: ${responseTime.toFixed(2)}ms`);
      
      if (responseTime > 100) {
        console.warn('⚠️ Touch response time is slow for mobile');
      }
    };
    
    document.addEventListener('touchstart', handleTouch, { once: true });
  },

  testScrollPerformance: () => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureScroll = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        console.log(`📊 Scroll FPS: ${fps}`);
        
        if (fps < 30) {
          console.warn('⚠️ Scroll performance is below 30 FPS');
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureScroll);
    };
    
    requestAnimationFrame(measureScroll);
  },

  testMemoryUsage: () => {
    if (performance.memory) {
      const memory = performance.memory;
      const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
      const limitMB = Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
      
      console.log(`💾 Memory Usage: ${usedMB}MB / ${totalMB}MB (${limitMB}MB limit)`);
      
      if (usedMB > limitMB * 0.8) {
        console.warn('⚠️ High memory usage detected');
      }
    } else {
      console.log('💾 Memory API not available');
    }
  },

  testNetworkConditions: () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      console.log(`🌐 Network: ${connection.effectiveType} (${connection.downlink}Mbps)`);
      
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        console.warn('⚠️ Slow network detected - mobile optimizations active');
      }
      
      if (connection.saveData) {
        console.log('💾 Data saver mode enabled');
      }
    } else {
      console.log('🌐 Network API not available');
    }
  },

  testBatteryImpact: async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await navigator.getBattery();
        const level = Math.round(battery.level * 100);
        console.log(`🔋 Battery Level: ${level}% (Charging: ${battery.charging})`);
        
        if (level < 20) {
          console.warn('⚠️ Low battery - enabling power saving mode');
        }
      } catch (error) {
        console.log('🔋 Battery API not available');
      }
    }
  },

  // Generate performance report
  generateReport: () => {
    const report = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio
      },
      performance: {
        memory: performance.memory ? {
          used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
        } : null,
        timing: performance.timing ? {
          loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
          domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
        } : null
      },
      connection: 'connection' in navigator ? {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData
      } : null
    };
    
    console.log('📋 Mobile Performance Report:', report);
    return report;
  }
};

// Auto-run tests on mobile devices
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      mobilePerformanceTest.runTests();
      mobilePerformanceTest.generateReport();
    }, 2000);
  });
}

// Export for manual testing
window.mobilePerformanceTest = mobilePerformanceTest;
