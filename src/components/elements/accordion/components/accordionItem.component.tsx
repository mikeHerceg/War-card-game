import { AccordionItemInterface } from '../accordion.types';
import { useAccordion } from '../accordion.hooks';
import styles from '../accordion.module.scss';


export function AccordionItem({ heading, content, isDefault }:AccordionItemInterface) {
  const { isExpanded, setExpanded, AccordionContentRef } = useAccordion(isDefault);

  return (
    <article className={styles['accordion-item']}>
      <h3>
        <button type="button" onClick={setExpanded} >
          {heading}
          <svg className={isExpanded ? styles['arrow-up'] : ''} viewBox="0 0 407.437 407.437" role="presentation" aria-hidden="true">
            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
          </svg>
        </button>
      </h3>
      <div className={styles.window} data-expanded={isExpanded} >
        <div ref={AccordionContentRef} className={styles.content}>
          {content}
        </div>
      </div>
    </article>
  );
}
