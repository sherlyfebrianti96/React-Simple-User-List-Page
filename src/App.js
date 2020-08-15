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
	}

	getInitialUsers = () => {
		const userStorage = window.sessionStorage.getItem(userStorageId);

		return (userStorage) ? JSON.parse(userStorage) : [];
	};

	componentDidMount() {
		if (this.state.users.length <= 0) {
			this.loadUsers();
		}
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
				window.sessionStorage.setItem(userStorageId, JSON.stringify(data.results));
			});
	}

	render() {
		return (
			<div className="App">
				<HeaderContainer/>
				<div className="Cards">
					{this.showUsers()}
					<div className="Clearfix"/>
				</div>
			</div>
		);
	}
}
