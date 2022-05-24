import { useRef, useEffect } from 'react';

export const useMount = () => {
	const selfEl = useRef(null);
	useEffect(() => {
		const self = selfEl.current;
		return () => {
			self.remove();
		};
	}, []);
	return selfEl;
};