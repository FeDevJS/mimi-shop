import React, { useContext } from 'react';
import './shop-cart-page.css';
import { ShopCartContext } from '../../contexts/ShopCartProvider';
import { useMount } from '../../hooks/useMount';
import './shop-cart-page.css';
import { CartProduct } from './components/CartProduct';
import { NoProducts } from './components/NoProducts';

const ShopCartPage = () => {
	const self = useMount();
	const { cartData } = useContext(ShopCartContext);
	return(
		<>
			<section ref={self} className='sections shop-cart-page-section'>
				<h3 className='cart-header'>Carrito</h3>
				{cartData.cartProducts.length > 0
					? cartData.cartProducts.map(prod => (
						<CartProduct 
							key={prod.id}
							id={prod.id}
							name={prod.name}
							quantity={prod.quantity}
							price={prod.price}
						/>
					))
					: <NoProducts />
				}
			</section>
		</>
	);
};

export default ShopCartPage;