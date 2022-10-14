import React, { Component } from 'react';

// import { ApiResources } from './components/api-resurses/Api-Resurs';
import { Header } from './components/header/Header';
import { RandomPlanet } from './components/random-planet/Random-planet';
import { ItemList } from './components/item-list/Item-list';
import { ItemDetails } from './components/person-details/Item-details';
import { ApiResources } from './components/api-resurses/Api-Resurs';
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
			<>
				<Header />
				<RandomPlanet />
				<div className='content-wrapper'>
					<ItemList listItemHandler={this.listItemHandler} getData={this.myApi.getAllPeople} renderItems={(item) => item.name} />
					<ItemDetails selectedItemId={this.state.selectedItemId} getData={this.myApi.getPerson} />
				</div>
			</>
		);
	}
}

export default App;
