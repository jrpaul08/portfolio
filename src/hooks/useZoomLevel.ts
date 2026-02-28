import { useState, useEffect } from 'react';

const ZOOM_OUT_THRESHOLD = 90;
const ZOOM_IN_THRESHOLD = 140;

interface ZoomState {
  isZoomedOut: boolean;
  isZoomedIn: boolean;
}

export function useZoomLevel(): ZoomState {
  const [zoomState, setZoomState] = useState<ZoomState>({
    isZoomedOut: false,
    isZoomedIn: false,
  });

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
      setZoomState({
        isZoomedOut: zoomLevel < ZOOM_OUT_THRESHOLD,
        isZoomedIn: zoomLevel > ZOOM_IN_THRESHOLD,
      });
    };

    checkZoom();
    window.addEventListener('resize', checkZoom);
    
    return () => window.removeEventListener('resize', checkZoom);
  }, []);

  return zoomState;
}
