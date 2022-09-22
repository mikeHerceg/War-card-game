
import { Card } from '../../atoms';
import styles from './modal.module.scss';
import { useModal } from './modal.hooks';

interface ModalProps {
    children: JSX.Element | JSX.Element[],
    onClose: ()=>void,
    isVisible:boolean
}

export function Modal({ children, onClose, isVisible }:ModalProps) {
  useModal(isVisible, onClose);


  return (
    isVisible ? (
      <div className={styles['modal-container']} >
        <Card>
          <div className={styles.modal}>
            <button type="button" onClick={onClose}>x</button>
            {children}
          </div>
        </Card>
      </div>
    ) :
      null
  );
}
