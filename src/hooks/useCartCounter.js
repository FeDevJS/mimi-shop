import { useEffect, useRef, useState } from 'react';
import { shopCartIS } from './initialStates/shopCartIS';

export const useCartCounter = () => {
	const [cartData, setCartData] = useState({...shopCartIS});
	const refCart = useRef(null);
	useEffect(() => {
		refCart.current.classList.add('til');
		setTimeout(() => {
			refCart.current.classList.remove('til')
		}, 1001);
	}, [cartData.cartCounter]);
	return {
		cartData,
		setCartData,
		refCart
	};
};
