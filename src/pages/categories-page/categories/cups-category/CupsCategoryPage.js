import React from 'react';
import { useMount } from '../../../../hooks/useMount';
import './cups-category-page.css';

const CupsCategoryPage = () => {
	const self = useMount();
	return(
		<section ref={self} className='sections cups-category-section'>
			Nothing to show...
		</section>
		);
};

export default CupsCategoryPage;