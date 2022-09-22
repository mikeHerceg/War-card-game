import { useEffect, useState } from 'react';

export const useNotification = (isVisible:boolean|null) => {

  const [isHidden, setHidden] = useState<boolean>();

  useEffect(() => {
    setHidden(!isVisible ?? false);
  }, [isVisible]);

  const handleClose = () => {
    setHidden(true);
  };


  return {
    isHidden,
    handleClose,
  };
};
