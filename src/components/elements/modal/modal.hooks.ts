import { useEffect } from 'react';

export const useModal = (isVisible:boolean, onClose:()=>void) => {
  const handleKeyUp = (e:any) => {
    const { key, keyCode } = e;
    if (key === 'Escape' || keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('keyup', handleKeyUp);
    } else {
      window.removeEventListener('keyup', handleKeyUp);
    }
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isVisible]);
};
