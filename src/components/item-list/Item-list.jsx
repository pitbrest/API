import React from 'react';
import './Item-list.css';

const ItemList = (props) => {
	const renderItems = () => {
		const { data, listItemHandler, children } = props;

		return data.map((item) => {
			const content = children(item);

			return (
				<div className='itemList-item list-group list-group-item list-group-item-action' key={item.id} onClick={() => listItemHandler(item.id)}>
					{content}
				</div>
			);
		});
	};

	const content = renderItems();

	return <div className='item-list'>{content}</div>;
};

export { ItemList };
