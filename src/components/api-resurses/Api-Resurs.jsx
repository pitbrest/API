import React, { Component } from 'react';

class ApiResources extends Component {
	_baseUrl = 'https://swapi.dev/api/';

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
	getPlanet = (id) => {
		return this.getResource(`planets/${id}/`);
	};

	render() {
		console.log('hello');
		return <div>Api-Resurs</div>;
	}
}

export { ApiResources };
