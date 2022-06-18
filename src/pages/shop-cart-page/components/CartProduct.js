import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { useMount } from '../../../hooks/useMount';
import './cart-product.css';

export const CartProduct = ({ id, name, quantity, price }) => {
	const self = useMount();
	return(
		<>
			<article ref={self} key={id} className='cart-product'>
				<h5 className='cart-product-name'>{name}</h5>
				<div className='cart-product-buttons-container'>
					<button className='buttons cart-button minus-btn' type='button'>
						<FontAwesomeIcon icon={faMinus} />
					</button>
					<button className='buttons cart-button plus-btn' type='button'>
						<FontAwesomeIcon icon={faPlus} />
					</button>
					<button className='buttons cart-button remove-btn' type='button'>
						<FontAwesomeIcon icon={faX} />
					</button>
				</div>
				<p className='cart-product-quantity'>{quantity}</p>
				<p className='cart-product-subtotal'>${+price * +quantity}</p>
			</article>
		</>
	);
};