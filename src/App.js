import React, { Component } from 'react';

// import { ApiResources } from './components/api-resurses/Api-Resurs';
import { Header } from './components/header/Header';
import { RandomPlanet } from './components/random-planet/Random-planet';
import { ItemList } from './components/item-list/Item-list';
import { PersonDetails } from './components/person-details/Person-details';
import { ApiResources } from './components/api-resurses/Api-Resurs';
import './App.css';

class App extends Component {
	state = {
		selectedPersonId: 1
	};

	myApi = new ApiResources();

	listItemHandler = (id) => {
		this.setState({
			selectedPersonId: id
		});
	};

	render() {

		return (
			<>
				<Header />
				<RandomPlanet />
				<div className='content-wrapper'>
					<ItemList listItemHandler={this.listItemHandler} actionFn={this.myApi.getAllPeople} />
					<PersonDetails selectedPersonId={this.state.selectedPersonId} />
				</div>
			</>
		);
	}
}

export default App;
