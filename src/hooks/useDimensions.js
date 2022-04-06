import { useEffect, useState } from 'react';

export function useDimensions() {
  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return dimensions;
}
