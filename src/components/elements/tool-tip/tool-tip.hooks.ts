import { useState, useRef, useEffect } from 'react';

export const useToolTip = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toolTipRef = useRef<HTMLDivElement>(null);

  const addToolTip = () => {
    setIsVisible(true);
  };
  const removeToolTip = () => {
    setIsVisible(false);
  };

  const trackMouse = (e:any) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    toolTipRef.current?.setAttribute('style', `top:${mouseY}px;left:${mouseX}px;`);

  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('mousemove', trackMouse);
    }
    if (!isVisible) {
      window.removeEventListener('mousemove', trackMouse);
    }
    return () => {
      window.removeEventListener('mousemove', trackMouse);
    };
  }, [isVisible]);


  return {
    addToolTip,
    removeToolTip,
    isVisible,
    toolTipRef,
  };
};
