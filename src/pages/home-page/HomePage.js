import React from 'react';
import { useMount } from '../../hooks/useMount';
import './home-page.css';

export const HomePage = () => {
	const self = useMount();
	return(
		<>
			<header ref={self} className='main-header-container'>
				<h1 className='main-header'>
					<span className='main-header-name'>MIMI</span>
					<span className='main-header-heart'>-</span>
					<span className='main-header-shop'>SHOP</span>
				</h1>
			</header>
		</>
	);
};