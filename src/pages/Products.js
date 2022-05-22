import React, { useEffect, useRef } from 'react';
import '../styles/products--section.css';
import { ProductNavItem } from '../components/ProductNavItem';
import { Outlet } from 'react-router-dom';

export const Products = () => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		console.count(`Products mounted`)
		return() => {
			console.count(`Products unmounted`);
			self.remove();
		};
	}, []);
	return(
		<>
			<section className='sections products--section' ref={selfEl}>
				<ProductNavItem productNavItemTitle='Tazas' />
				<ProductNavItem productNavItemTitle='Cuadernos' />
			</section>
			<Outlet />
		</>
	);
};