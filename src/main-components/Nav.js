import React, { useEffect } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom'

export const Nav = () => {
	useEffect(() => {
		console.count("Nav mounted.");
	}, []);
	return(
		<>
			<nav className='nav-bar'>
				<ul className='nav-items-wrapper'>
					<li className='nav-items'>
						<NavLink className={(navItem) => navItem.isActive ? "active-item" : null} to='/'>INICIO</NavLink>
					</li>
					<li className='nav-items'>
						<NavLink className={(navItem) => navItem.isActive ? "active-item" : null} to='/productos'>PRODUCTOS</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};