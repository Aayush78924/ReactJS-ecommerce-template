import React from 'react';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ReactComponent as ShoppingIcon1 } from '../../assets/cart.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon1 style={{height:'35px',width:'35px'}} className='shopping-icon' />
        <span className='item-count' style={{fontSize:'15px'}}> { itemCount } </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect (
    mapStateToProps, 
    mapDispatchToProps)
    (CartIcon);
    