import React from 'react';
import css from './SearchBar.module.css';

function SearchBar() {
	return (
		<div>
			<input className={css.search} type="input" placeholder="Jordan 1's" />
		</div>
	);
}

export default SearchBar;
