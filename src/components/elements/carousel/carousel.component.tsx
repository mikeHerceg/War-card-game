
import React from 'react';
import { useCarousel } from './carousel.hook';
import styles from './carousel.module.scss';
import { CarouselProps } from './carousel.types';


export function Carousel({
  items,
  ...props
}:CarouselProps) {

  const {
    slideContainerRef,
    evaluatePosition,
    handleArrow,
    setCurrentSlide,
  } = useCarousel(items);



  return (
    <div {...props} data-testid="carousel" className={styles.carousel}>
      <div className={styles['slides-container']} ref={slideContainerRef}>
        {// slides
            items.map((item, index) => {
              const slideStatus = evaluatePosition(index);
              return (
                <div id={`slide-${index}`} key={index} className={styles.slide} data-slide={slideStatus}>
                  {item.content}
                </div>
              );
            })
        }
      </div>

      <div className={styles.nav}>
        <button type="button" onClick={() => handleArrow('backwards')}> {'<'} </button>
        {// nav
        items.map((item, index) => {
          const count = index + 1;
          return (<button key={index} type="button" onClick={() => setCurrentSlide(index)} data-target="index"> {count} </button>);
        })}
        <button type="button" onClick={() => handleArrow('forwards')}> {'>'} </button>
      </div>
    </div>
  );
}

