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
		const res = await this.getResource('people/');
		return res.results.map(person => this._transformPerson(person));
	};
	getPerson = async (id) => {
		const person = await this.getResource(`people/${id}/`);
		return this._transformPerson(person);
	};

	getPlanets = async () => {
		const res = await this.getResource('planets/');
		return res.results.map(planet => this._trancformPlanet(planet));
	};
	getPlanet = async (id) => {
		const planet = await this.getResource(`planets/${id}/`);
		return this._trancformPlanet(planet);
	};

	getStarships = async () => {
		const res = await this.getResource('starships/');
		return res.results.map(ship => this._transformStarship(ship));
	};
	getStarship = async (id) => {
		const starShip = await this.getResource(`starships/${id}/`);
		return this._transformStarship(starShip);
	};

	_transformPerson = (person) => {
		return {
			id: this._idExtracting(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
		};
	};
	_trancformPlanet = (planet) => {
		return {
			id: this._idExtracting(planet),
			planetName: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
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
			cargoCapacity: starship.cargo_capacity,
		};
	};

	render() {
		console.log('hello');
		return <div>Api-Resurs</div>;
	}
}

export { ApiResources };
