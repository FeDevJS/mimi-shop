import React from 'react';
import '../styles/products-cards.css';

export const ProductCard = ({ productName, cardClass, img, imgAlt, stock }) => {
	return(
		<>
			<article className={`product-card-wrapper ${cardClass}-card`}>
				<section className='product-img-container'>
					<img className='product-img' src={img} alt={imgAlt} />
				</section>
				<section className='product-title-container'>
					<h2 className='product-title'>{productName}</h2>
				</section>
				<section className='product-stock-container'>
					<h2 className='product-stock'>Stock: {stock}</h2>
				</section>
			</article>
		</>
	);
};