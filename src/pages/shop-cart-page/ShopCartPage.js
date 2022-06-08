import React, { useContext } from 'react';
import './shop-cart-page.css';
import { ShopCartContext } from '../../contexts/ShopCartProvider';
import { useMount } from '../../hooks/useMount';
import './shop-cart-page.css';
import { CartProduct } from './components/CartProduct';

export const ShopCartPage = () => {
	const self = useMount();
	const { cartData } = useContext(ShopCartContext);
	return(
		<>
			<section ref={self} className='sections shop-cart-page-section'>
				{cartData.cartProducts.length > 0
					? cartData.cartProducts.map(prod => (
						<CartProduct 
							id={prod.id}
							name={prod.name}
							quantity={prod.quantity}
							price={prod.price}
						/>
					))
					: 'Sin productos en el carrito.'
				}
			</section>
		</>
	);
};