import React from 'react';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>    
        <ShoppingIconContainer></ShoppingIconContainer>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>    
);

const mapDispatcToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps= createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatcToProps)(CartIcon);