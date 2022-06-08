import React from 'react';
import { useMount } from '../../../hooks/useMount';
import './cart-product.css';

export const CartProduct = ({ id, name, quantity, price }) => {
	const self = useMount();
	return(
		<article ref={self} key={id} className='cart-product'>
			<h5 className='cart-product-name'>{name}</h5>
			<p className='cart-product-quantity'>{quantity}</p>
			<p className='cart-product-subtotal'>${+price * +quantity}</p>
	</article>
	);
};