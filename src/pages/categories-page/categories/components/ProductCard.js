import React from 'react';
import { ButtonsContainer } from './ButtonsContainer';
import './product-card.css';

export const ProductCard = ({ productName, price, id, category, products }) => {
	return(
		<>
			<article className={`product-card-wrapper ${productName.toLowerCase()}-card`}>
				<section className='product-img-container'>
					<div className='product-img'></div>
				</section>
				<section className='product-price-container'>
					<h4 className='product-price'>
						<span className='price'>${price}</span>
					</h4>
				</section>
				<ButtonsContainer id={id} category={category} products={products} />
			</article>
		</>
	);
};