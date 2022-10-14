import React, { Component } from 'react';
import { Loading } from '../loading/Loading';
import './Item-details.css';

class ItemDetails extends Component {
	state = {
		item: null,
		isLoading: true,
	};

	currentFn = this.props.getData;

	updateItem = () => {
		this.setState({ isLoading: true });
		const selectedItemId = this.props.selectedItemId;

		if (!selectedItemId) {
			return;
		}

		this.currentFn(selectedItemId).then((item) => {
			this.setState({
				item: item,
				isLoading: false,
			});
		});
	};

	componentDidMount() {
		this.updateItem();
	}
	componentDidUpdate(prevProps) {
		if (this.props.selectedItemId !== prevProps.selectedItemId) {
			this.updateItem();
		}
	}

	render() {
		if (this.state.isLoading) {
			return <Loading />;
		}

		const { id, name, gender, birthYear, eyeColor } = this.state.item;

		return (
			<div className='person-container'>
				<img className='person-img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='person-img' />
				<div className='personInfo-container'>
					<h3 className='person-name'>{name}</h3>
					<div className='person-info'>{gender}</div>
					<div className='person-info'>{birthYear}</div>
					<div className='person-info'>{eyeColor}</div>
				</div>
			</div>
		);
	}
}

export { ItemDetails };
