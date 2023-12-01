import React, {ReactNode} from 'react'
import styles from './Modal.module.css'
import { observer } from 'mobx-react-lite';
import GlobalStore from '../../Store';

interface ModalProps {
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = observer(({children}) => {

	return (	
		<div className={styles.modal} onClick={function(e) {
			GlobalStore.closeModal(e);
		}}>{children}</div>
	)
});

export default Modal