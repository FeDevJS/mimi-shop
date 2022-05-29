import React from 'react';
import './loader.css';
import { useMount } from '../hooks/useMount';

export const Loader = () => {
	const self = useMount();
	return <div ref={self} className='loader'></div>
};