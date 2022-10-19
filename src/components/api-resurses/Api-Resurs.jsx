import React, { Component } from 'react';

class ApiResources extends Component {
	_baseUrl = 'https://swapi.dev/api/';
	_baseImg = 'https://starwars-visualguide.com/assets/img/';

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

	getSpecies = async () => {
		const res = await this.getResource('species/');
		return res.results.map(specie => this._transformSpecie(specie));
	};
	getSpecie = async (id) => {
		const specie = await this.getResource(`species/${id}/`);
		return this._transformSpecie(specie);
	};

	getPersonImg = (id) => {
		return this._baseImg + `characters/${id}.jpg`;
	};
	getSpecieImg = (id) => {
		return this._baseImg + `species/${id}.jpg`;
	};
	getPlanetImg = (id) => {
		return (id !== '1' ?
			this._baseImg + `planets/${id}.jpg` : this._baseImg + `planets/19.jpg`);
	};

	_transformPerson = (person) => {
		return {
			id: this._idExtracting(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			scinColor: person.skin_color
		};
	};
	_transformSpecie = (specie) => {
		return {
			id: this._idExtracting(specie),
			name: specie.name,
			classification: specie.classification,
			designation: specie.designation,
			height: specie.average_height,
			lifespan: specie.average_lifespan
		};
	};
	_trancformPlanet = (planet) => {
		return {
			id: this._idExtracting(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		};
	};

	render() {
		return <></>;
	}
}

export { ApiResources };



	// getVehicles = async () => {
	// 	const res = await this.getResource('vehicles/');
	// 	return res.results.map(vehicle => this._trancformVehicles(vehicle));
	// };
	// getVehicle = async (id) => {
	// 	const vehicle = await this.getResource(`vehicles/${id}/`);
	// 	return this._trancformVehicles(vehicle);
	// };

		// getVehicleImg = (id) => {
	// 	return this._baseImg + `vehicles/${id}.jpg`;
	// };

		// _trancformVehicles = (vehicle) => {
	// 	return {
	// 		id: this._idExtracting(vehicle),
	// 		name: vehicle.name,
	// 		model: vehicle.model,
	// 		length: vehicle.length,
	// 		speed: vehicle.max_atmosphering_speed,
	// 		cost: vehicle.cost_in_credits
	// 	};
	// };