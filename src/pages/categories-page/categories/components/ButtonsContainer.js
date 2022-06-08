import React, { useContext, useReducer } from 'react';
import './buttonsContainer.css';
import { ShopCartContext } from '../../../../contexts/ShopCartProvider';
import { counterReducer } from '../../../../reducers/counterReducer';
import { Button } from './Button';

export const ButtonsContainer = ({ id, category, products }) => {
	const [text, dispatch] = useReducer(counterReducer, false);
	const { cartData, setCartData } = useContext(ShopCartContext);
	const handleAdd = () => dispatch({ 
		action: 'add', 
		category,
		id,
		cartData,
		setCartData,
		products
	});
	const handleRemove = () => dispatch({ 
		action: 'remove', 
		category,
		id,
		cartData,
		setCartData,
		products
	});
	return(
		<section className='product-buttons-container'>
			<Button 
				btnClass={'plus-btn'} 
				id={id} 
				category={category} 
				innerText={!text ? 'AGREGAR' : 'REMOVER'}
				onClickFn={!text ? handleAdd : handleRemove}
				/>
		</section>
	);
};