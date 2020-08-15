import React from 'react';

export class HeaderContainer extends React.Component {
	render() {
		return (
			<div className="Header">
				<h1>Qoala Test</h1>
				<div className="Action">
					<button onClick={this.props.sortByColor}>Color</button>
					<button onClick={this.props.sortByCity}>Cities</button>
				</div>
			</div>
		);
	}
}
