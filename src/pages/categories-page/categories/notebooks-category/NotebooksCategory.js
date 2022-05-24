import React from 'react';
import { useMount } from '../../../../hooks/useMount';
import './notebooks-category.css';

export const NotebooksCategory = () => {
	const self = useMount();
	return <h3 ref={self}>Cuadernos</h3>
};