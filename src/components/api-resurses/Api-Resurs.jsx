import React, { Component } from 'react';

class ApiResources extends Component {
	_baseUrl = 'https://swapi.dev/api/';

	_idExtracting = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		const id = item.url.match(idRegExp)[1];
		return id;
	};

	getResource = async (url = '') => {
		const response = await fetch(this._baseUrl + url);
		if (!response.ok) {
			throw new Error(`Could not fetch ${this._baseUrl + url}, received ${response.status}`);
		}
		return await response.json();
	};

	getAllPeople = async () => {
		return await this.getResource('people/');
	};
	getPerson = (id) => {
		return this.getResource(`people/${id}/`);
	};

	getPlanets = async () => {
		return await this.getResource('planets/');
	};
	getPlanet = async (id) => {
		return this.getResource(`planets/${id}/`);
	};


	_trancformPlanet = (planet) => {
		return {
			id: this._idExtracting(planet),
			planetName: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		};
	};
	_transformPerson = (person) => {
		return {
			id: this._idExtracting(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		};
	};
	_transformStarship = (starship) => {
		return {
			id: this._idExtracting(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity
		};
	};

	render() {
		console.log('hello');
		return <div>Api-Resurs</div>;
	}
}

export { ApiResources };
