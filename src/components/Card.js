import React from 'react';

export class Card extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Card">
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
