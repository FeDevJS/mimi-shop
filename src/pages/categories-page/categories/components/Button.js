import React from 'react';

export const Button = ({ id, category, btnClass, innerText, onClickFn }) => {
	return (
		<button
			type='button'
			className={`buttons ${btnClass}`}
			data-id={id} 
			data-category={category}
			onClick={onClickFn}
			>
			{innerText}
		</button>
	)
};