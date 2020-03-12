import React from 'react';
import './shop-header.css'
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className='shop-header row'>
      <Link className='logo text-dark' href='#'>ReStore</Link>
      <Link className='shopping-cart' href='#'>
        <i className='cart-icon fa fa-shopping-cart' />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;
