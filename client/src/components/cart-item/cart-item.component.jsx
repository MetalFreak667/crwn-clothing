import React from 'react';

import { CartItemContainer, ItemDetailsContainer, CartImageContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;