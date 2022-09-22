import React from 'react';
import styles from './accordion.module.scss';
import { AccordionItemInterface } from './accordion.types';
import { AccordionItem } from './components/accordionItem.component';

interface AccordionProps {
    panels:AccordionItemInterface[]
}


export function Accordion({
  panels,
  ...props
}:AccordionProps) {


  return (
    <div {...props} className={styles.accordion}>
      {
        panels.map((item: AccordionItemInterface, index:number) => (
          <AccordionItem
            key={index}
            heading={item.heading}
            content={item.content}
            isDefault={item?.isDefault}
          />
        ))
    }
    </div>
  );
}
