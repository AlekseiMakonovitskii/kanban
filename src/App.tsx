import {useState} from 'react';
import MobileNav from "./components/MobileNav/MobileNav"
import styles from './App.module.css'
import Section from './components/Section/Section';
import Modal from './components/Modal/Modal';
import { observer } from 'mobx-react-lite';
import GlobalStore from './Store';
import CreateTask from './components/CreateTask/CreateTask';

type SectionsState = {
  todo: boolean;
  inProgress: boolean;
  finished: boolean;
};

const App = observer(() => {
  const [isActiveSection, setIsActiveSection] = useState<SectionsState>({
    todo: true,
    inProgress: false,
    finished: false,
  })

  return (
    <div className={styles.app}>
      <MobileNav isActiveSection={isActiveSection} setIsActiveSection={setIsActiveSection}/>
      <div className={styles.sections}>
        <Section isActiveSection={isActiveSection} sectionTitle='To Do' type='todo'/>
        <Section isActiveSection={isActiveSection} sectionTitle='In Progress' type='inProgress'/>
        <Section isActiveSection={isActiveSection} sectionTitle='Finished' type='finished'/>
      </div>

    {GlobalStore.isModal && <Modal>
        {GlobalStore.isNewTask && <CreateTask />}
      </Modal>}
    </div>
  )
});

export default App