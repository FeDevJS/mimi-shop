import React, { useEffect, useRef } from 'react';
import '../styles/home--page.css';

export const HomePage = () => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		console.log(`Home mounted`)
		return() => {
			console.log(`Home unmounted`);
			self.remove();
		};
	}, []);
	return(
		<>
			<header ref={selfEl} className='main-header-container'>
				<h1 className='main-header'>
					<span className='main-header-name'>MIMI</span>
					<span className='main-header-heart'>-</span>
					<span className='main-header-shop'>SHOP</span>
				</h1>
			</header>
		</>
	);
};