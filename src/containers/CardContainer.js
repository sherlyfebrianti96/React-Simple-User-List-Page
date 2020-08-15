import React from 'react';
import {Card} from "../components/Card";

// const usersData = require('./../assets/users');
export class CardContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}

	componentDidMount() {
		console.log('this is called');
		fetch('https://randomuser.me/api/?results=100')
			.then(response => response.json())
			.then((data) => {
				console.log('data : ', data);
				this.setState({
					user: data.results[0]
				});
				console.log(this.state.user);
			});
	}

	getCard() {
		const user = this.state.user;
		const userNameObj = user.name;
		const fullName = userNameObj.title + '. ' + userNameObj.first + ' ' + userNameObj.last;
		const userPicture = user.picture;
		const userDob = user.dob;
		const userLocation = user.location;
		const userAddress = userLocation.city + ', ' + userLocation.state + ', ' + userLocation.postcode;
		const userEmail = user.email;

		return (
			<Card image={userPicture.medium} fullName={fullName} age={userDob.age} address={userAddress} email={userEmail} />
		);
	}

	render() {
		return this.state.user && this.getCard();
	}
}
