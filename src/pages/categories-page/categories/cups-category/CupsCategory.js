import React, { useEffect, useRef } from 'react';
import './cups-category.css';

export const CupsCategory = () => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		console.count(`Cups mounted`)
		return() => {
			console.count(`Cups unmounted`);
			self.remove();
		};
	}, []);
	return <h3 ref={selfEl}>Tazas</h3>
};