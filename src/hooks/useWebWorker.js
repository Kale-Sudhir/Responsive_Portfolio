import { useEffect, useRef, useState } from 'react';

const useWebWorker = (workerPath) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(workerPath);
    
    workerRef.current.onmessage = (e) => {
      const { type, data: responseData } = e.data;
      
      switch (type) {
        case 'IMAGES_PROCESSED':
        case 'STATS_CALCULATED':
          setData(responseData);
          setLoading(false);
          break;
        case 'ERROR':
          setError(responseData.message);
          setLoading(false);
          break;
        default:
          setData(responseData);
          setLoading(false);
      }
    };

    workerRef.current.onerror = (error) => {
      setError(error.message);
      setLoading(false);
    };

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, [workerPath]);

  const postMessage = (type, data) => {
    if (workerRef.current) {
      setLoading(true);
      setError(null);
      workerRef.current.postMessage({ type, data });
    }
  };

  return { data, loading, error, postMessage };
};

export default useWebWorker;
