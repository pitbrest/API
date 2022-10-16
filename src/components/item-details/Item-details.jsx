import React, { Component } from 'react';
import { Loading } from '../loading/Loading';
import './Item-details.css';

class ItemDetails extends Component {
	state = {
		item: null,
		image: null,
		isLoading: true,
	};

	updateItem = () => {
		this.setState({ isLoading: true });
		const { selectedItemId, getImageUrl, getData } = this.props;

		if (!selectedItemId) {
			return;
		}

		getData(selectedItemId).then((item) => {
			this.setState({
				item: item,
				image: getImageUrl(item.id),
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

		const { name } = this.state.item;

		return (
			<div className='person-container'>
				<img className='person-img' src={this.state.image} alt='person-img' />
				<div className='personInfo-container'>
					<h3 className='person-name'>{name}</h3>
					{React.Children.map(this.props.children, (child) => {
						return React.cloneElement(child, { item: this.state.item });
					})}
				</div>
			</div>
		);
	}
}

export { ItemDetails };
