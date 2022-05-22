import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Products } from '../pages/Products';
import { Cups } from '../pages/Products/Cups';
import { Notebooks } from '../pages/Products/Notebooks';

export const AppRouter = () => {
	return(
		<>
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<Home />} />
				<Route path='/productos' element={<Products />} />
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