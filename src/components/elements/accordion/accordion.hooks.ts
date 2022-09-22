import { useState, useRef, useEffect } from 'react';


export const useAccordion = (isDefault?:boolean) => {

  const AccordionContentRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(isDefault || false);

  const toggleHeight = (target:HTMLDivElement) => {
    const { parentElement, clientHeight } = target;
    if (parentElement) {
      const height = isExpanded ? clientHeight : '0';
      parentElement.setAttribute('style', `height:${height}px`);
    }
  };

  const setExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (AccordionContentRef.current) {
      toggleHeight(AccordionContentRef.current);
    }
  }, [isExpanded, AccordionContentRef.current]);


  return {
    AccordionContentRef,
    isExpanded,
    setExpanded,
  };
};
