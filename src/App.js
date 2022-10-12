import React, { Component } from 'react';

// import { ApiResources } from './components/api-resurses/Api-Resurs';
import { Header } from './components/header/Header';
import { RandomPlanet } from './components/random-planet/Random-planet';
import { ListItem } from './components/item-list/List-item';
import { PersonDetails } from './components/person-details/Person-details';
import './App.css';

class App extends Component {
	state = {
		selectedPersonId: null,
	};

	listItemHandler = (id) => {
		this.setState({
			selectedPerson: id,
		});
		console.log(id);
	};

	render() {
		return (
			<>
				<Header />
				<RandomPlanet />
				<div className='content-wrapper'>
					<ListItem listItemHandler={this.listItemHandler} />
					<PersonDetails personId={this.state.selectedPersonId} />
				</div>
			</>
		);
	}
}

export default App;
