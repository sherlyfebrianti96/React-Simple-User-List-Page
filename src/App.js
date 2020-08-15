import React from 'react';
import './App.scss';
import {HeaderContainer} from './containers/HeaderContainer';
import {CardContainer} from "./containers/CardContainer";

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
		this.loadUsers = this.loadUsers.bind(this);
	}

	componentDidMount() {
		this.loadUsers()
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
				console.log(this.state.users);
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
