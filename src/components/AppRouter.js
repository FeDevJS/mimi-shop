import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductsPage } from '../pages/ProductsPage';
import { Cups } from '../pages/Products/Cups';
import { Notebooks } from '../pages/Products/Notebooks';

export const AppRouter = () => {
	return(
		<>
			<Routes>
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/productos' element={<ProductsPage />} />
				<Route path='/productos/tazas' element={<Cups />} />
				<Route path='/productos/cuadernos' element={<Notebooks />} />
				{/* REDIRECTIONS */}
				<Route path='/products' element={<Navigate to='/productos' />} />
				<Route path='/products/cups' element={<Navigate to='/productos/tazas' />} />
				<Route path='/home' element={<Navigate to='/' />} />
				<Route path='/inicio' element={<Navigate to='/' />} />
			</Routes>
		</>
	);
};