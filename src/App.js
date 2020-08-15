import React from 'react';
import './App.scss';
import {HeaderContainer} from './containers/HeaderContainer';
import {CardContainer} from "./containers/CardContainer";

const userStorageId = 'users';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: this.getInitialUsers()
		};
		this.loadUsers = this.loadUsers.bind(this);
		this.scrollVertical = this.scrollVertical.bind(this);
		this.scrollHorizontal = this.scrollHorizontal.bind(this);
	}

	getInitialUsers = () => {
		const userStorage = window.sessionStorage.getItem(userStorageId);

		return (userStorage) ? JSON.parse(userStorage) : [];
	};

	componentDidMount() {
		if (this.state.users.length <= 0) {
			this.loadUsers();
		}
		this.scrollVertical();
	}

	showUsers() {
		let users = [];

		this.state.users.forEach((user, index) => {
			users.push(<CardContainer key={index} user={user}/>);
		});

		return users;
	}

	loadUsers() {
		fetch('https://randomuser.me/api/?results=10')
			.then(response => response.json())
			.then((data) => {
				console.log('data : ', data);
				this.setState({
					users: this.state.users.concat(data.results)
				});
				window.sessionStorage.removeItem(userStorageId);
				window.sessionStorage.setItem(userStorageId, JSON.stringify(this.state.users));
			});
	}

	scrollVertical() {
		window.onscroll = () => {
			const isBottomEnd = ((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
			this.loadSrollEnd(isBottomEnd, false);
		};
	}

	scrollHorizontal(event) {
		let isRightEnd = (event.target.scrollWidth === (event.target.scrollLeft + event.target.clientWidth));
		setTimeout(
			this.loadSrollEnd(false, isRightEnd)
		, 1000);
	}

	loadSrollEnd(isBottomEnd, isRightEnd) {
		if ((isBottomEnd || isRightEnd) && this.state.users.length < 100) {
			this.loadUsers();
		}
	}

	render() {
		return (
			<div className="App">
				<HeaderContainer/>
				<div className="Cards" onScroll={this.scrollHorizontal}>
					{this.showUsers()}
					<div className="Clearfix"/>
				</div>
			</div>
		);
	}
}
