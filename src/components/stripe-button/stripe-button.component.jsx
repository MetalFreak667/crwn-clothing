import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_4nYDfYXE2vgMTQvvyhBS6S9N00ZBTex0A3';

    const onToken = token => {
        console.log(token);
        alert('Payment succesfull')
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