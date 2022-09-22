import { useState, useEffect, useRef } from 'react';
import { CarouselItems } from './carousel.types';

export const useCarousel = (items:CarouselItems[]) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const getContainerHeight = () => {
    if (slideContainerRef.current) {
      const slides = slideContainerRef.current.children;
      const array = Array.from(slides);
      const largestSlide = array.reduce((a:any, b:any) => {
        if (a.clientHeight > b.clientHeight) return a.clientHeight;
        return b.clientHeight;
      });
      slideContainerRef.current.setAttribute('style', `--height:${largestSlide}px;`);
    }
  };

  useEffect(() => {
    getContainerHeight();
    window.addEventListener('resize', getContainerHeight);
    return () => window.removeEventListener('resize', getContainerHeight);
  }, []);


  const handleArrow = (direction:'forwards'|'backwards') => {
    if (direction === 'forwards') {
      if (currentSlide === items.length - 1) {
        return setCurrentSlide(0);
      }
      return setCurrentSlide(currentSlide + 1);
    }
    if (currentSlide === 0) {
      return setCurrentSlide(items.length - 1);
    }
    return setCurrentSlide(currentSlide - 1);
  };

  const evaluatePosition = (index:number) => {
    if (index === currentSlide) return 'current';
    if (currentSlide === items.length - 1 && index === 0) {
      // if current is at the last position make the first item next
      return 'next';
    }
    if (index === items.length - 1 && currentSlide === 0) {
      // if current is at the first position make the last item prev
      return 'prev';
    }
    if (index < currentSlide) return 'prev';
    return 'next';
  };

  return {
    slideContainerRef,
    evaluatePosition,
    handleArrow,
    setCurrentSlide,
  };

};
