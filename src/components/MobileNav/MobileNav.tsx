import * as React from 'react';
import styles from './MobileNav.module.css'

interface MobileNavProps {
	isActiveSection: {
		todo: boolean,
		inProgress: boolean,
		finished: boolean,
		[key: string]: boolean;
	};

  setIsActiveSection: (isActiveSection: { todo: boolean; inProgress: boolean; finished: boolean }) => void;
}

const MobileNav: React.FC <MobileNavProps> = ({isActiveSection, setIsActiveSection}) => {
	const handleChangeTab = (tab : string, e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) : void => {
		e.preventDefault();
		const updatedSection: { todo: boolean; inProgress: boolean; finished: boolean, [key: string]: boolean; } = {
				todo: false,
				inProgress: false,
				finished: false,
		}
		
		updatedSection[tab] = true;
		setIsActiveSection(updatedSection);
	}
	
	return (
		<div className={styles.mobileNav}>
			<a href="" className={isActiveSection.todo ? styles.activeButton : ''} onClick={(e) => handleChangeTab('todo', e)}>To Do</a>
			<a href="" className={isActiveSection.inProgress ? styles.activeButton  : ''} onClick={(e) => handleChangeTab('inProgress', e)}>In Progress</a>
			<a href="" className={isActiveSection.finished ? styles.activeButton  : ''} onClick={(e) => handleChangeTab('finished', e)}>Finished</a>
		</div>
	)
}

export default MobileNav