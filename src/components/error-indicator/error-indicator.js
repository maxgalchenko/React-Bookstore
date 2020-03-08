import React from 'react';
import BookImg from './errorImg.png';

const ErrorIndicator = () => {
  return (
    <div className='text-center'>
      <h1 className='display-3'>All books are gone ...</h1>
      <h3>But we are already writing new ones!</h3>
      <img className='w-50' src={BookImg} alt='recover missed books' />
    </div>
  );
};

export default ErrorIndicator;
