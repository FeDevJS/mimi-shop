import React, { useEffect, useRef } from 'react';
import '../styles/products--page.css';
import { ProductCategoryItem } from '../components/ProductCategoryItem';

export const ProductsPage = () => {
	const selfEl = useRef(null);
	const productsCategories = useRef(null);
	useEffect(() => {
		productsCategories.current = document.querySelectorAll(".product-category-item-wrapper");
		console.log(productsCategories.current.length)
		const self = selfEl.current;
		console.count(`Products mounted`)
		return() => {
			console.count(`Products unmounted`);
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