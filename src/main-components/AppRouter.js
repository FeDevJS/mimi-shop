import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import { NotebooksCategory } from '../pages/categories-page/categories/notebooks-category/NotebooksCategory';
import { HomePage } from '../pages/home-page/HomePage';
const ShopCartPage = lazy(() => import('../pages/shop-cart-page/ShopCartPage'));
const CategoriesPage = lazy(() => import('../pages/categories-page/CategoriesPage'));
const CupsCategoryPage = lazy(() => import('../pages/categories-page/categories/cups-category/CupsCategoryPage'));

export const AppRouter = () => {
	return(
		<>
			<Suspense>
				<Routes>
					{/* EXACT PATHS */}
					<Route path='*' element={<NotFoundPage />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/shop-cart' element={<ShopCartPage />} />
					<Route path='/productos' element={<CategoriesPage />} />
					<Route path='/productos/tazas' element={<CupsCategoryPage />} />
					<Route path='/productos/cuadernos' element={<NotebooksCategory />} />
					{/* REDIRECTIONS */}
					<Route path='/products' element={<Navigate to='/productos' />} />
					<Route path='/products/cups' element={<Navigate to='/productos/tazas' />} />
					<Route path='/home' element={<Navigate to='/' />} />
					<Route path='/inicio' element={<Navigate to='/' />} />
				</Routes>
			</Suspense>
		</>
	);
};