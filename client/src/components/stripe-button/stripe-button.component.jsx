import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_4nYDfYXE2vgMTQvvyhBS6S9N00ZBTex0A3';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error=>{
            console.log('Pyment error: ', JSON.parse(error));
            alert('Payment error');
        });

    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='React tutorial stripePayment'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        >
        </StripeCheckout>
    );
};

export default StripeCheckoutButton;