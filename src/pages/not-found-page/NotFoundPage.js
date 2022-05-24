import React from 'react';
import { useMount } from '../../hooks/useMount';
import './not-found-page.css';

export const NotFoundPage = () => {
	const self = useMount();
	return(
		<>
			<p ref={self} className='not-found-text'>Page not found</p>
		</>
	);
};