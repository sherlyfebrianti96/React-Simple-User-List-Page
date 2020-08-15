import React from 'react';
import './App.scss';
import {HeaderContainer} from './containers/HeaderContainer';
import {CardContainer} from "./containers/CardContainer";

function App() {
	return (
		<div className="App">
			<HeaderContainer/>
			<div className="Cards">
				<CardContainer/>
				<div className="Clearfix" />
			</div>
		</div>
	);
}

export default App;
