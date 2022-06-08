import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './shop-cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ShopCartContext } from '../contexts/ShopCartProvider';

export const ShopCartIcon = () => {
	const { cartData, refCart } = useContext(ShopCartContext);
	return(
		<>
			<div ref={refCart} className='shop-cart-container'>
				<NavLink to='/shop-cart' className={(shopCart) =>  shopCart.isActive ? 'shop-cart-icon-active' : 'shop-cart-icon-link'}>
					<FontAwesomeIcon icon={faCartShopping} />
					<p className='shop-cart-quantity'>{cartData.cartCounter}</p>
				</NavLink>
			</div>
		</>
	);
};