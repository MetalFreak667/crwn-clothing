import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CheckoutPageContainer, TestWarningContainer, TotalContainer, CheckoutHeaderContainer } from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
        }
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payment
            <br/>
            4242 4242 4242 4242
            <br/>
            EXP: 01/20
            <br/>
            CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total}></StripeCheckoutButton>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});


export default connect(mapStateToProps)(CheckoutPage);