// Web Worker for heavy computations
self.onmessage = function(e) {
  const { type, data } = e.data;
  
  switch (type) {
    case 'PROCESS_IMAGES':
      // Simulate image processing
      const processedData = data.map(item => ({
        ...item,
        processed: true,
        timestamp: Date.now()
      }));
      
      self.postMessage({
        type: 'IMAGES_PROCESSED',
        data: processedData
      });
      break;
      
    case 'CALCULATE_STATS':
      // Simulate heavy calculation
      const stats = {
        totalItems: data.length,
        averageLength: data.reduce((acc, item) => acc + (item.description?.length || 0), 0) / data.length,
        processedAt: Date.now()
      };
      
      self.postMessage({
        type: 'STATS_CALCULATED',
        data: stats
      });
      break;
      
    default:
      self.postMessage({
        type: 'ERROR',
        message: 'Unknown message type'
      });
  }
};
