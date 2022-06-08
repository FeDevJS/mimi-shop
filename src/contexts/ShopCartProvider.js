import { createContext } from 'react';
import { useCartCounter } from '../hooks/useCartCounter';

export const ShopCartContext = createContext(null);

export const ShopCartProvider = ({ children }) => {
	const data = useCartCounter();
	return(
		<ShopCartContext.Provider value={data}>
			{children}
		</ShopCartContext.Provider>
	);
};