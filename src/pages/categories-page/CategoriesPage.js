import React from 'react';
import { useMount } from '../../hooks/useMount';
import './categories-page.css';
import { CategoryCard } from './components/CategoryCard';

const CategoriesPage = () => {
	const self = useMount();
	return(
		<>
			<section ref={self} className='sections products--section'>
				<CategoryCard productCategoryItemTitle='Tazas' />
				<CategoryCard productCategoryItemTitle='Cuadernos' />
			</section>
		</>
	);
};

export default CategoriesPage;