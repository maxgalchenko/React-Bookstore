import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ cartItems }) => {
  const totalSum = cartItems.reduce((a, b) => a + b.total, 0);
  const countSum = cartItems.reduce((a, b) => a + b.count, 0);

  return (
    <header className='shop-header row'>
      <Link to='/'>
        <div className='logo text-dark'>ReStore</div>
      </Link>
      <Link to='/cart'>
        <div className='shopping-cart'>
          <i className='cart-icon fa fa-shopping-cart' />
          {countSum} items (${totalSum})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    cartItems
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
