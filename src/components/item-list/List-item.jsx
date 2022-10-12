import React, { Component } from 'react';
import './List-item.css';
import { Loading } from '../loading/Loading';
import { ApiResources } from '../api-resurses/Api-Resurs';

class ListItem extends Component {
	state = {
		peopleList: null,
	};

	myApi = new ApiResources();

	componentDidMount() {
		this.myApi.getAllPeople().then((peopleList) => {
			this.setState({
				peopleList: peopleList,
			});
		});
	}

	renderItems = () => {
		return this.state.peopleList.map((item) => (
			<div className='itemList-item list-group list-group-item list-group-item-action' key={item.id} onClick={() => this.props.listItemHandler(item.id)}>
				{item.name}
			</div>
		));
	};

	render() {
		const { peopleList } = this.state;

		if (!peopleList) {
			return <Loading />;
		}
		const content = this.renderItems();
		return <div className='item-list'>{content}</div>;
	}
}

export { ListItem };
