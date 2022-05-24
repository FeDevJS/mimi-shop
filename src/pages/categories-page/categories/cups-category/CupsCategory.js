import React from 'react';
import { useMount } from '../../../../hooks/useMount';
import './cups-category.css';

export const CupsCategory = () => {
	const self = useMount();
	return <h3 ref={self}>Tazas</h3>
};