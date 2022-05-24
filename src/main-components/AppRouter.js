import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'
import { HomePage } from '../pages/home-page/HomePage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import { ShopCartPage } from '../pages/shop-cart-page/ShopCartPage';
import { CategoriesPage } from '../pages/categories-page/CategoriesPage';
import { CupsCategory } from '../pages/categories-page/categories/cups-category/CupsCategory';
import { NotebooksCategory } from '../pages/categories-page/categories/notebooks-category/NotebooksCategory';

export const AppRouter = () => {
	return(
		<>
			<Routes>
				<Route path='*' element={<NotFoundPage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/shop-cart' element={<ShopCartPage />} />
				<Route path='/productos' element={<CategoriesPage />} />
				<Route path='/productos/tazas' element={<CupsCategory />} />
				<Route path='/productos/cuadernos' element={<NotebooksCategory />} />
				{/* REDIRECTIONS */}
				<Route path='/products' element={<Navigate to='/productos' />} />
				<Route path='/products/cups' element={<Navigate to='/productos/tazas' />} />
				<Route path='/home' element={<Navigate to='/' />} />
				<Route path='/inicio' element={<Navigate to='/' />} />
			</Routes>
		</>
	);
};