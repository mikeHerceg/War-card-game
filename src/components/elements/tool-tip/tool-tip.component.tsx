import styles from './tool-tip.module.scss';
import { useToolTip } from './tool-tip.hooks';

interface ToolTipProps {
    children:JSX.Element,
    tip:string
}

export function ToolTip(
  {
    children,
    tip,
    ...props
  }:ToolTipProps) {

  const { addToolTip, removeToolTip, isVisible, toolTipRef } = useToolTip();

  return (
    <>
      <div {...props} className={styles['tool-tip-container']} onMouseEnter={addToolTip} onMouseLeave={removeToolTip} onFocus={addToolTip}>
        {children}
      </div>
      <div ref={toolTipRef} className={styles['tool-tip']} data-visible={isVisible}>
        {tip}
      </div>
    </>

  );
}
