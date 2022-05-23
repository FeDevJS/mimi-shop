import React from 'react';
import { Link } from 'react-router-dom';
import './category-card.css'

export const CategoryCard = ({ productCategoryItemTitle }) => {
	return(
		<>
			<article className={`product-category-item-wrapper ${productCategoryItemTitle.toLowerCase()}-category-item-card`}>
				<section className={`product-category-title-container`}>
					<h2 className='product-category-item-title'>
						<Link to={`/productos/${productCategoryItemTitle.toLowerCase()}`}>{productCategoryItemTitle}</Link>
					</h2>
				</section>
			</article>
		</>
	);
};