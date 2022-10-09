import React from 'react';
import './Item-list.css';

const ItemList = () => {
  return (
    <div className='item-list'>
      <div className='itemList-item'>Luke Skywolker</div>
      <div className='itemList-item'>Darth Vader</div>
      <div className='itemList-item'>R2-D2</div>
    </div>
  );
};

export { ItemList };