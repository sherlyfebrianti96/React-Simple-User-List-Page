import React from 'react';

export class HeaderContainer extends React.Component {
	render() {
		return (
			<div className="Header">
				<h1>Qoala Test</h1>
				<div className="Action">
					<select onChange={this.props.changeSortingMethod}>
						<option value="ASC">Sort ASC</option>
						<option value="DESC">Sort DESC</option>
					</select>
					<button onClick={this.props.sortByColor}>Color</button>
					<button onClick={this.props.sortByCity}>Cities</button>
				</div>
			</div>
		);
	}
}
