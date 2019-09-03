import React from 'react';
import { connect } from 'react-redux';
import { removeItem, clearItem, addItem } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer, CheckoutImageContainer, CheckoutRemoveButtonContainer, TextContainer, QuantityContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, removeItem, clearItem, addItem }) => 
{
    const  { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img alt='item' src={imageUrl} ></img>
            </CheckoutImageContainer>
            <TextContainer>{name}</TextContainer>            
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>            
            <TextContainer>{price}</TextContainer>
            <CheckoutRemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</CheckoutRemoveButtonContainer>
        </CheckoutItemContainer>    
    );
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);