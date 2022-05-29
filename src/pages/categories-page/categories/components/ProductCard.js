import React from 'react';
import './product-card.css';

export const ProductCard = ({ productName, price, id }) => {
	const handleClick = (e) => console.log(e.target.dataset.id);
	return(
		<>
			<article className={`product-card-wrapper ${productName.toLowerCase()}-card`}>
				<section className='product-img-container'>
					<div className='product-img'></div>
				</section>
				<section className='product-title-container'>
					<h3 className='product-title'>{productName}</h3>
				</section>
				<section className='product-price-container'>
					<h4 className='product-price'>
						<span className='price'>${price}</span>
						<span className='quantity'>(0)</span>
					</h4>
				</section>
				<section className='product-buttons-container'>
					<button disabled type='button' className='buttons minus-btn' data-id={id}>
						-
					</button>
					<button type='button' className='buttons plus-btn' data-id={id} onClick={handleClick} >
						+
					</button>
				</section>
			</article>
		</>
	);
};