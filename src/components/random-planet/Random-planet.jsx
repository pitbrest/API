import React, { Component } from 'react';
import './Random-planet.css';
import { Loading } from '../loading/Loading';
import { Error } from '../error/Error';
import { ApiResources } from '../api-resurses/Api-Resurs';

class RandomPlanet extends Component {
	state = {
		planet: {},
		isLoading: true,
		error: false,
	};

	myApi = new ApiResources();

	onError = (e) => {
		this.setState({
			error: true,
			Loading: false,
		});
	};

	getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	getId = async () => {
		// const dataLength = await this.myApi.getPlanets().then((data) => data.length);
		return this.getRandomIntInclusive(2, 19);
	};

	updatePlanet = async () => {
		await this.myApi
			.getPlanet(await this.getId())
			.then((planet) =>
				this.setState({
					planet: { ...planet, img: `https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg` },
					isLoading: false,
				})
			)
			.catch(this.onError);
	};

	componentDidMount() {
		this.myInt = setInterval(() => this.updatePlanet(), 10000);
	}
	componentWillUnmount() {
		clearInterval(this.myInt);
	}

	render() {
		const { planet, isLoading, error } = this.state;
		return (
			<div className='randomPlanet-container'>
				<SectionView planet={planet} isLoading={isLoading} error={error} />
			</div>
		);
	}
}

export { RandomPlanet };

const SectionView = ({ planet, isLoading, error }) => {
	if (error) return <Error />;
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<img src={planet.img} className='planet-img' alt='planet-img' />
					<div className='planetInfo-container'>
						<h2 className='planet-title'>{planet.planetName}</h2>
						<div className='planet-info'>
							<p className='planetInfo-text'>
								Population <span>{planet.population}</span>
							</p>
							<p className='planetInfo-text'>
								Rotation Period <span>{planet.rotationPeriod}</span>
							</p>
							<p className='planetInfo-text'>
								Diameter <span>{planet.diameter}</span>
							</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};
