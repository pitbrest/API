import React, { Component } from 'react';

class ApiResources extends Component {
	_baseUrl = 'https://swapi.dev/api/';

	getResource = async (url = '') => {
		const response = await fetch(this._baseUrl + url);
		if (!response.ok) {
			throw new Error(`Could not fetch ${this._baseUrl + url}, received ${response.status}`);
		}
		return response.json();
	};

	getAllPeople = async () => {
		return this.getResource('people/');
	};

	getPerson = async (id) => {
		return this.getResource(`people/${id}`);
	};

	render() {
		console.log('hello');
		return <div>Api-Resurs</div>;
	}
}

export { ApiResources };
