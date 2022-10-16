import React from 'react';

const ContentField = ({ item, field, label }) => {
  return (
    <div className='item-info'>
      {label} <span>{item[field]}</span>
    </div>
  );
};

export { ContentField };