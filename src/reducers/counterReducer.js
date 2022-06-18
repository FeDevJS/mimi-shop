import { dataRequest } from "../helpers/dataRequest";

export const counterReducer = (oldState, types) => {
	const { cartData, setCartData, category, id, navigate } = types;
	const { cartCounter, cartProducts } = cartData;
	switch(types.action) {
		case 'add': 
			setTimeout(() => {
				dataRequest(`http://localhost:5000/api/products/${category}`)
					.then((res) => {
						const newProduct = res.filter(prod => prod.id === id);
						newProduct[0].quantity = 1;
						const isProduct = cartProducts.find(prod => prod.id === id);
						if(isProduct) {
							isProduct.quantity = isProduct.quantity + 1;
						} else {
							setCartData({
								...cartData,
								cartCounter: cartCounter + 1,
								cartProducts: [...cartProducts, ...newProduct]
							});
						};
						navigate('/shop-cart')
					});
				}, 0);
			return oldState;
		case 'remove': 
			setTimeout(() => {
				const products = cartProducts.filter(prod => prod.id !== id);
				setCartData({
					...cartData,
					cartCounter: cartCounter - 1,
					cartProducts: [...products]
				});
			}, 0);
			return oldState;
		default: console.error("Ha habido un error.");
	};
};