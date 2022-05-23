import React, { useEffect, useRef } from 'react';
import './categories-page.css';
import { CategoryCard } from './components/CategoryCard';

export const CategoriesPage = () => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		console.count("Categories mounted");
		return() => {
			console.count("Categories unmounted");
			self.remove();
		};
	}, []);
	return(
		<>
			<section className='sections products--section' ref={selfEl}>
				<CategoryCard productCategoryItemTitle='Tazas' />
				<CategoryCard productCategoryItemTitle='Cuadernos' />
			</section>
		</>
	);
};