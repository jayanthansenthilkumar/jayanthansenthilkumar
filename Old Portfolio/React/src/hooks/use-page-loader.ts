import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';

/**
 * A hook to show and hide the loader based on data loading state
 * @param isDataLoading Boolean indicating if data is currently being loaded
 * @param minDuration Minimum duration in ms to show the loader (to prevent flashing)
 */
export const usePageLoader = (isDataLoading: boolean, minDuration = 600) => {
  const { setLoading } = useLoading();
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (isDataLoading) {
      setLoading(true);
    } else {
      // Keep loader visible for at least minDuration ms for smoother UX
      timer = setTimeout(() => {
        setLoading(false);
      }, minDuration);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isDataLoading, setLoading, minDuration]);
};
