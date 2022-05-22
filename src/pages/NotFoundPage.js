import React, { useEffect, useRef } from 'react';

export const NotFoundPage = () => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		console.count(`Not found mounted`)
		return() => {
			console.count(`Not found unmounted`);
			self.remove();
		};
	}, []);
	return(
		<>
			<p ref={selfEl} className='not-found-text'>Page not found</p>
		</>
	);
};