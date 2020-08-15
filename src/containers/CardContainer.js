import React from 'react';
import {Card} from "../components/Card";

// const usersData = require('./../assets/users');
export class CardContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	getCard() {
		const user = this.props.user;
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
		return this.getCard();
	}
}

CardContainer.defaultProps = {
	gender: null,
	name: {
		title: null,
		first: null,
		last: null
	},
	location: {
		street: {
			number: null,
			name: null
		},
		city: null,
		state: null,
		country: null,
		postcode: null,
		coordinates: {
			latitude: null,
			longitude: null
		},
		timezone: {
			offset: null,
			description: null
		}
	},
	email: null,
	login: {
		uuid: null,
		username: null,
		password: null,
		salt: null,
		md5: null,
		sha1: null,
		sha256: null
	},
	dob: {
		date: null,
		age: null
	},
	registered: {
		date: null,
		age: null
	},
	phone: null,
	cell: null,
	id: {
		name: null,
		value: null
	},
	picture: {
		large: null,
		medium: null,
		thumbnail: null
	},
	nat: null
};
