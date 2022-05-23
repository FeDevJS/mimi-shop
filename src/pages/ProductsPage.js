import React, { useEffect, useRef } from 'react';
import '../styles/products--page.css';
import { ProductCategoryItem } from '../components/ProductCategoryItem';

export const ProductsPage = () => {
	const selfEl = useRef(null);
	const categoriesMobileRows = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		categoriesMobileRows.current = document.querySelectorAll(".product-category-item-wrapper").length;
		return() => {
			self.remove();
		};
	}, []);
	return(
		<>
			<section className='sections products--section' ref={selfEl}>
				<ProductCategoryItem productCategoryItemTitle='Tazas' />
				<ProductCategoryItem productCategoryItemTitle='Cuadernos' />
			</section>
		</>
	);
};