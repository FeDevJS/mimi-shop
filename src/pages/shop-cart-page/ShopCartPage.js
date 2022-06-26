// import React, { useContext } from 'react';
import './shop-cart-page.css';
// import { ShopCartContext } from '../../contexts/ShopCartProvider';
import { useMount } from '../../hooks/useMount';
import './shop-cart-page.css';
import { NoProducts } from './components/NoProducts';

const ShopCartPage = () => {
	const self = useMount();
	// const { cartData } = useContext(ShopCartContext);
	return(
		<>
			<section ref={self} className='sections shop-cart-page-section'>
				<NoProducts />
			</section>
		</>
	);
};

export default ShopCartPage;