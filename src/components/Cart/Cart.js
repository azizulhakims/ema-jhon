import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
//  console.log(cart);

 let total = 0;
 let shipping = 0;
 let quantity = 0;
 for(const product of cart){
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
 }

 const tax = total * 0.1;

 const grandTotal = total + shipping + tax;

//  const Grand 

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total} </p>
            <p>Total SHipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p> <b> Grand Total: ${grandTotal.toFixed(2)} </b></p>
        </div>
    );
};

export default Cart;