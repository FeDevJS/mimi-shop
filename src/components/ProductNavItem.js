import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-nav-item.css';

export const ProductNavItem = ({ productNavItemTitle }) => {
	return(
		<>
			<article className={`product-nav-item-wrapper ${productNavItemTitle.toLowerCase()}-nav-item-card`}>
				<section className={`product-nav-title-container`}>
					<h2 className='product-nav-item-title'>
						<Link to={`/productos/${productNavItemTitle.toLowerCase()}`}>{productNavItemTitle}</Link>
					</h2>
				</section>
			</article>
		</>
	);
};