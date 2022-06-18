import React from 'react';
import { useMount } from '../../hooks/useMount';
import './not-found-page.css';

export const NotFoundPage = () => {
	const self = useMount();
	return(
		<>
			<div className='text-container'>
				<p ref={self} className='not-found-code'>UPS...</p>
				<p ref={self} className='not-found-text'>Esta página (aún) no existe</p>
			</div>
		</>
	);
};