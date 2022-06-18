import React from 'react'
import './no-products.css';
import { useMount } from '../../../hooks/useMount';

export const NoProducts = () => {
	const self = useMount();
	return (
		<div ref={self} className='no-products-container'>
			<p>Sin productos en el carrito.</p>
		</div>
	);
};