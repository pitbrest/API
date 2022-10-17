import './Item-list.css';
import { ApiResources } from '../api-resurses/Api-Resurs';
import withData from '../hoc-helpers/with-data';

const ItemList = (props) => {

	const { data, listItemHandler, children: renderItems } = props;

	const items = data.map((item) => {
		const content = renderItems(item);

		return (
			<div className='itemList-item list-group list-group-item list-group-item-action' key={item.id} onClick={() => listItemHandler(item.id)}>
				{content}
			</div>
		);
	});

	return (
		<div className='item-list'>{items}</div>
	);
};


const { getAllPeople } = new ApiResources();

export default withData(ItemList, getAllPeople)

