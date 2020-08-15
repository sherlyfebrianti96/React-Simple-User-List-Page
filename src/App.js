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
		this.sortByCity = this.sortByCity.bind(this);
		this.sortByColor = this.sortByColor.bind(this);
		this.compareColorAsc = this.compareColorAsc.bind(this);
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

	sortByCity() {
		this.sortByCityAsc();
	}

	sortByCityAsc() {
		const sorted = this.state.users.sort(this.compareCityAsc);
		this.setState({
			users: sorted
		});
	}

	compareCityAsc(a, b) {
		switch (true) {
			case (a.location.city < b.location.city) :
				return -1;
				break;
			case (a.location.city > b.location.city) :
				return 1;
				break;
			default:
				return 0;
		}
	}

	sortByColor() {
		this.sortByColorAsc()
	}

	sortByColorAsc() {
		const sorted = this.state.users.sort(this.compareColorAsc);
		this.setState({
			users: sorted
		});
	}

	compareColorAsc(a, b) {
		switch (true) {
			case (this.getColorPriority(a.dob.age) < this.getColorPriority(b.dob.age)) :
				return -1;
				break;
			case (this.getColorPriority(a.dob.age) > this.getColorPriority(b.dob.age)) :
				return 1;
				break;
			default:
				return 0;
		}
	}

	getColorPriority(age) {
		const priorities = {
			green: 1,
			blue: 2,
			red: 3
		};

		let colorPriority = 0;
		switch (true) {
			case (age < 21) :
				colorPriority = priorities['red'];
				break;
			case (age > 56) :
				colorPriority = priorities['blue'];
				break;
			default:
				colorPriority = priorities['green'];
		}


		return colorPriority;
	}

	render() {
		return (
			<div className="App">
				<HeaderContainer sortByCity={this.sortByCity} sortByColor={this.sortByColor}/>
				<div className="Cards" onScroll={this.scrollHorizontal}>
					{this.showUsers()}
					<div className="Clearfix"/>
				</div>
			</div>
		);
	}
}
