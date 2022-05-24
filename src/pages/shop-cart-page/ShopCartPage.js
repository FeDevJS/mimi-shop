import React from 'react';
import { useMount } from '../../hooks/useMount';
import './shop-cart-page.css';

export const ShopCartPage = () => {
	const self = useMount();
	return(
		<>
			<h3 ref={self}>Shop cart page</h3>
		</>
	);
};