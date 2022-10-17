import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { RandomPlanet } from './components/random-planet/Random-planet';
import { ApiResources } from './components/api-resurses/Api-Resurs';
// import { PeoplePage } from './components/people-page/People-page';
import { ErrorBoundry } from './components/error-boundry/Error-boundry';
import { ItemContainer } from './components/item-container/Item-container';
import { ItemDetails } from './components/item-details/Item-details';
import { ContentField } from './components/item-details/Content-field';
import ItemList from './components/item-list';

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

		const { getPerson, getPlanet,
			getPersonImg, getPlanetImg } = this.myApi;

		const personDetails = (
			<ItemDetails
				selectedItemId={1}
				getData={getPerson}
				getImageUrl={getPersonImg}>
				<ContentField field='gender' label='Gender' />
				<ContentField field='birthYear' label='Birth year' />
				<ContentField field='eyeColor' label='Eye Color' />
				<ContentField field='scinColor' label='Scin Color' />
			</ItemDetails>
		);

		const planetDetails = (
			<ItemDetails
				selectedItemId={1}
				getData={getPlanet}
				getImageUrl={getPlanetImg}
			>
				<ContentField field='name' label='Planet Name' />
				<ContentField field='population' label='Population' />
				<ContentField field='diameter' label='Diameter' />
				<ContentField field='rotationPeriod' label='Rotation Period' />

			</ItemDetails>
		);

		return (
			<ErrorBoundry>
				<Header />
				<RandomPlanet />
				<ItemList getData={this.myApi.getAllPeople} >
					{item => item.name}
				</ItemList>
				{/* <PeoplePage /> */}
				{/* <ItemContainer
					left={personDetails}
					right={planetDetails}
				/> */}
			</ErrorBoundry>
		);
	}
}

export default App;
