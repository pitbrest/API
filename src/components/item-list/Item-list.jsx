import React, { Component } from 'react';
import './Item-list.css';
import { Loading } from '../loading/Loading';

class ItemList extends Component {
	state = {
		itemList: null,
	};

	dataFn = this.props.getData;

	componentDidMount() {
		this.dataFn().then((itemList) => {
			this.setState({
				itemList: itemList,
			});
		});
	}

	renderItems = () => {
		return this.state.itemList.map((item) => {
			const content = this.props.children(item);
			return (
				<div className='itemList-item list-group list-group-item list-group-item-action' key={item.id} onClick={() => this.props.listItemHandler(item.id)}>
					{content}
				</div>
			);
		});
	};

	render() {
		const { itemList } = this.state;

		if (!itemList) {
			return <Loading />;
		}
		const content = this.renderItems();
		return <div className='item-list'>{content}</div>;
	}
}

export { ItemList };
