import React from 'react';
import { NavLink } from 'react-router-dom';
import './shop-cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const ShopCartIcon = () => {
	return(
		<>
			<div className='shop-cart-container'>
				<NavLink to='/shop-cart' className={(shopCart) =>  shopCart.isActive ? 'shop-cart-icon-active' : 'shop-cart-icon-link'}>
					<FontAwesomeIcon icon={faCartShopping} />
					<p className='shop-cart-quantity'>0</p>
				</NavLink>
			</div>
		</>
	);
};