import React from 'react';

const RED = '#feb6cb';
const GREEN = '#d5fed3';
const BLUE = '#c3f4fe';

export class Card extends React.Component {

	constructor(props) {
		super(props);
	}

	getStyle() {
		let color;
		const age = this.props.age;

		switch (true) {
			case (age < 21) :
				color = RED;
				break;
			case (age > 56) :
				color = BLUE;
				break;
			default:
				color = GREEN;
		}

		return {
			backgroundColor: color
		};
	}

	render() {
		return (
			<div className="Card" style={this.getStyle()}>
				<div className="Photo">
					{this.props.image && <img src={this.props.image} alt={this.props.fullName}/>}
				</div>
				<div className="Fullname">
					{this.props.fullName}
				</div>
				<div className="Age">
					{this.props.age} years old
				</div>
				<div className="Order-reversed">
					<div className="Address">
						{this.props.address}
					</div>
					<div className="Email">
						{this.props.email}
					</div>
				</div>
			</div>
		);
	}
}

Card.defaultProps = {
	image: null,
	fullName: null,
	age: null,
	address: null,
	email: null
};
