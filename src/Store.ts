import { makeAutoObservable } from 'mobx';

class Store {
  isModal: boolean = false;
	isNewTask: boolean = true;

  constructor() {
		makeAutoObservable(this);
  }

	openModal(type: boolean): void {
		this.isModal = true;
		this.isNewTask = type;
	}

	closeModal(e : React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
		e.preventDefault();
		this.isModal = false;
	}

}

const GlobalStore = new Store();
export default GlobalStore;