import React from 'react';

export class HeaderContainer extends React.Component {
	render() {
		return (
			<div className="header">
				<h1>Qoala Test</h1>
				<div className="action">
					<button>Color</button>
					<button>Cities</button>
				</div>
			</div>
		);
	}
}
