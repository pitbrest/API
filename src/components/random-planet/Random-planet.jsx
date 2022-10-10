import React, { Component } from 'react';
import './Random-planet.css';

import { ApiResources } from '../api-resurses/Api-Resurs';

class RandomPlanet extends Component {
	state = {
		id: null,
		img: null,
		planetName: null,
		population: null,
		rotationPeriod: null,
		diameter: null,
	};

	myApi = new ApiResources();

	getRandomIntInclusive = (min = 2, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	getId = async () => {
		await this.myApi.getPlanets().then((data) => {
			this.setState({
				id: this.getRandomIntInclusive(2, data.length),
			});
		});
	};

	updatePlanet = async () => {
		await this.getId();
		this.myApi.getPlanet(this.state.id).then((planet) => {
			this.setState({
				img: `https://starwars-visualguide.com/assets/img/planets/${this.state.id}.jpg`,
				planetName: planet.name,
				population: planet.population,
				rotationPeriod: planet.rotation_period,
				diameter: planet.diameter,
			});
		});
	};

	async componentDidMount() {
		await this.getId();
		this.updatePlanet();
		this.myFunc();
	}

	myFunc() {
		setInterval(async () => {
			await this.getId();
			this.updatePlanet();
		}, 10000);
	}

	render() {
		const { img, planetName, population, rotationPeriod, diameter } = this.state;

		return (
			<div className='randomPlanet-container'>
				<img src={img} className='planet-img' alt='planet-img' />
				<div className='planetInfo-container'>
					<h2 className='planet-title'>{planetName}</h2>
					<div className='planet-info'>
						<p className='planetInfo-text'>
							Population <span>{population}</span>
						</p>
						<p className='planetInfo-text'>
							Rotation Period <span>{rotationPeriod}</span>{' '}
						</p>
						<p className='planetInfo-text'>
							Diameter <span>{diameter}</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export { RandomPlanet };
