import React from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import { useMount } from '../../../../hooks/useMount';
import { Loader } from '../../../../main-components/Loader';
import { ProductCard } from '../components/ProductCard';
import './cups-category-page.css';

export const CupsCategoryPage = () => {
	const data = useFetch("http://localhost:5000/api/products/cups");
	const self = useMount();
	return(
		<section ref={self} className='sections cups-category-section'>
			<h3 className='category-header'>
				{data.response && data.response[0].category}
			</h3>
			<div className='categories-products-wrapper'>
				{data.response !== null
					? data.response.map((product) => (
						<ProductCard 
							key={product.id} 
							productName={product.productName} 
							price={product.price} 
							id={product.id}
						/>
					))
					: data.error !== null
						? <p>{data.error}</p>
						: <Loader />
				}
			</div>
		</section>
		);
};