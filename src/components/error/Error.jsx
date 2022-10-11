import React from 'react';
import star from './star.png';
import './Error.css';

const Error = () => {
  return (
    <div className='error-container'>
      <img src={star} alt="boom-img" style={{ width: '80px', height: '80px' }} />
      <h3>Something went wrong !!!</h3>
      <p>We will try to get this fixed as soon as possible ...</p>
    </div>
  );
};

export { Error }; 