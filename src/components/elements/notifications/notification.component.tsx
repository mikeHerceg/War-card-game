import { NotificationProps } from './notification.types';
import styles from './notification.module.scss';
import { useNotification } from './notification.hooks';


export function Notification(
  {
    text,
    type,
    isVisible = true,
  }:NotificationProps) {

  const { handleClose, isHidden } = useNotification(isVisible);

  return (
    !isHidden ? (
      <div className={styles.notification} data-type={type}>
        {text}
        <button type="button" onClick={handleClose} aria-label="close notification">x</button>
      </div>
    )
      : null
  );
}
