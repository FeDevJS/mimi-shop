import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './buttonsContainer.css';
import { ShopCartContext } from '../../../../contexts/ShopCartProvider';
import { counterReducer } from '../../../../reducers/counterReducer';
import { Button } from './Button';

export const ButtonsContainer = ({ id, category, products }) => {
	const [text, dispatch] = useReducer(counterReducer, 'AÑADIR');
	const { cartData, setCartData } = useContext(ShopCartContext);
	const navigate = useNavigate();
	const handleAdd = () => dispatch({ 
		action: 'add', 
		category,
		id,
		cartData,
		setCartData,
		products,
		navigate
	});
	// const handleRemove = () => dispatch({ 
	// 	action: 'remove', 
	// 	category,
	// 	id,
	// 	cartData,
	// 	setCartData,
	// 	products
	// });
	return(
		<section className='product-buttons-container'>
			<Button 
				btnClass={'plus-btn'} 
				id={id} 
				category={category} 
				innerText={text}
				onClickFn={handleAdd}
				/>
		</section>
	);
};