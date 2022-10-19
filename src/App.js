import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { RandomPlanet } from './components/random-planet/Random-planet';
import { ApiResources } from './components/api-resurses/Api-Resurs';
import { ErrorBoundry } from './components/error-boundry/Error-boundry';
import {
	PersonList,
	PlanetList,
	SpecieList,
	PersonDetails,
	PlanetDetails,
	SpecieDetails
} from './components/sw-components/index';
import './App.css';

class App extends Component {
	state = {
		selectedItemId: 1,
	};

	myApi = new ApiResources();

	listItemHandler = (id) => {
		this.setState({
			selectedItemId: id,
		});
	};

	render() {
		return (
			<ErrorBoundry>
				<Header />
				<RandomPlanet />
				{/* <PeoplePage /> */}
				{/* <ItemContainer left={personDetails} right={planetDetails} /> */}
				{/* <ItemsData listItemHandler={this.listItemHandler}>
					{(item) => item.name}
				</ItemsData> */}
				<PersonDetails itemId={10} />
				<PlanetDetails itemId={10} />
				<SpecieDetails itemId={10} />

				<PersonList>
					{(item) => item.name}
				</PersonList>
				<PlanetList>
					{(item) => item.name}
				</PlanetList>
				<SpecieList>
					{(item) => item.name}
				</SpecieList>
			</ErrorBoundry>
		);
	}
}

export default App;
