import React from 'react'
import styles from './Task.module.css'
import { BsThreeDots } from "react-icons/bs";

interface TaskProps {
	id: number,
	title: string,
	text: string,
	level: string,
}

const Task: React.FC <TaskProps> = ({id, title, text, level}) => {
	const stringId = id + '';

	return (
		<div id={stringId} className={styles.task}>
			<div className={styles.taskInfo}>
				<h3 className={styles.level}>{level}</h3>
				<button><BsThreeDots /></button>
			</div>
			<h2>{title}</h2>
			<p>{text}</p>
			
		</div>
	)
}

export default Task