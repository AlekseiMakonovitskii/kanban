import * as React from 'react'
import styles from './CreateTask.module.css'
import { AiOutlineClose } from "react-icons/ai";
import DropdownSemantic from '../DropdownSemantic/DropdownSemantic';
import { observer } from 'mobx-react-lite';
import GlobalStore from '../../Store';

const levels = [
  { text: 'Low', value: 'low' },
  { text: 'Medium', value: 'medium' },
	{ text: 'High', value: 'high' },
  // Add more options as needed
];

const CreateTask = observer(() => {
	const handleEvents = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	}

	return (
		<div className={styles.createTask} onClick={(e) => handleEvents(e)}>
			<div className={styles.createTaskHeader}>
				<h3>Create Task</h3>
				<a href="" onClick={function(e) {GlobalStore.closeModal(e)}}><AiOutlineClose size={20}/></a>
			</div>
			<div className={styles.createTaskBody}>
				<input type="text" placeholder='Title'/>
				<textarea placeholder='Text'></textarea>
				<DropdownSemantic title='Select level' data={levels}/>
				<button className={styles.createTaskBtn}>Create</button>
			</div>
		</div>
	)
})

export default CreateTask