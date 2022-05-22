import React, { useEffect, useRef } from 'react';
import '../styles/home.css';

export const Home = () => {
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
			<main ref={selfEl} className='main-container'>
				<header>
					<h1 className='main-header'>MIMI-SHOP</h1>
				</header>
			</main>
		</>
	);
};