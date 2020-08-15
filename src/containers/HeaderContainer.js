import React from 'react';

export class HeaderContainer extends React.Component {
	render() {
		return (
			<div className="Header">
				<h1>Qoala Test</h1>
				<div className="Action">
					<button>Color</button>
					<button>Cities</button>
				</div>
			</div>
		);
	}
}
