import React from 'react';
import './Person-details.css';

const PersonDetails = () => {
  return (
    <div className='person-container'>
      <img className='person-img' href='/' alt='person-img'></img>
      <div className='personInfo-container'>
        <h3 className="person-name">R2-D2</h3>
        <div className="person-info">Gender male</div>
        <div className="person-info">Birth Year 43</div>
        <div className="person-info">Eye Color red</div>
      </div>
    </div>
  );
};

export { PersonDetails };