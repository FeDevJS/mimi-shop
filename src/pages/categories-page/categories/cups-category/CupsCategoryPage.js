import React from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import { useMount } from '../../../../hooks/useMount';
import { Loader } from '../../../../main-components/Loader';
import { CategoryHeader } from '../components/CategoryHeader';
import { ProductCard } from '../components/ProductCard';
import './cups-category-page.css';

const CupsCategoryPage = () => {
	const data = useFetch("http://localhost:5000/api/products/tazas");
	const self = useMount();
	return(
		<section ref={self} className='sections cups-category-section'>
			<CategoryHeader data={data} />
			<div className='categories-products-wrapper'>
				{data.response !== null
					? data.response.map((product) => (
						<ProductCard 
							key={product.id} 
							productName={product.name} 
							price={product.price} 
							id={product.id}
							category={product.category}
							products={data.response}
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

export default CupsCategoryPage;