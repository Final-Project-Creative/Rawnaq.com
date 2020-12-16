import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const Publishablekey='pk_test_51HyhfzIawUO8APw4JFqiTUVrgYwq8zVIgLU6wn5yJ6mvlLhk2HLyJGEg36NpBLXkD1xFypoSbAl9kQ0zMETfpgsH00vpnMnPNd';

    const onToken=token=>{
        console.log(token);
        alert('payment Successful');
    }


    return(
        <StripeCheckout
        label='pay now'
        name='Rawnaq shop.com'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay now'
        token={onToken}
        stripeKey={Publishablekey}

        />
    )
}
export default StripeCheckoutButton;