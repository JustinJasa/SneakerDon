import React from 'react';
import css from './Spinner.module.css';

function Spinner() {
	return (
		<div className={css.container}>
			<span className={css.spinner}></span>
		</div>
	);
}

export default Spinner;
