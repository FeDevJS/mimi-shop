import React, { useEffect, useRef } from 'react';
import './notebooks-category.css';

export const NotebooksCategory = () => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		console.count(`Notebooks mounted`)
		return() => {
			console.count(`Notebooks unmounted`);
			self.remove();
		};
	}, []);
	return <h3 ref={selfEl}>Cuadernos</h3>
};