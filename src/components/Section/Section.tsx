import React, {useState, useEffect} from 'react'
import styles from './Section.module.css'
import { FaPlus } from "react-icons/fa";
import Task from '../Task/Task';
import { observer } from 'mobx-react-lite';
import GlobalStore from '../../Store';

interface SectionProps {
	isActiveSection: {
		todo: boolean;
		inProgress: boolean;
		finished: boolean;
		[key: string]: boolean;
	}

	sectionTitle: string;
	type: 'todo' | 'inProgress' | 'finished';
}

const taskObj = {
	id: Date.now(),
	title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, voluptatum!',
	text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, officia. Cumque, necessitatibus neque minima error veritatis vero! Aperiam, delectus quae fugiat accusantium provident dignissimos voluptatem a? Tempora, sunt excepturi. Blanditiis, laboriosam! Provident, reiciendis esse! Nisi.',
	level: 'medium',
}

const Section: React.FC <SectionProps> = observer(({isActiveSection, sectionTitle, type}) => {
	const [modalType, setModalType] = useState(true);

	useEffect(() => {
		if (type === 'todo') {
			setModalType(true);
		} else {
			setModalType(false);
		}
	}, [modalType, type])

	return (
		<div className={`${styles.section} ${isActiveSection[type] ? styles.activeSection : ''}`}>
			<div className={styles.sectionHeader}>
				<div className={styles.sectionHeaderTop}>
					<h3>{sectionTitle}</h3>
					<button onClick={function() {
						GlobalStore.openModal(modalType);
					}}><FaPlus /></button>
				</div>
				<input type="text" className={styles.searchInput} placeholder='Search'/>
			</div>
			<div className={styles.sectionBody}>
				<Task {...taskObj}/>
				<Task {...taskObj}/>
				<Task {...taskObj}/>
				<Task {...taskObj}/>
				<Task {...taskObj}/>
			</div>
		</div>
	)
})

export default Section