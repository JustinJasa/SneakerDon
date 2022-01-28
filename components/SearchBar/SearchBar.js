import React, { useState, useEffect } from 'react';
import css from './SearchBar.module.css';
import { useRouter } from 'next/router';

function SearchBar() {
	const [input, setInput] = useState('');
	const router = useRouter();

	return (
		<div>
			<div className={css.buttonContainer}>
				<input
					type="text"
					placeholder="Jordan 1's"
					className={css.search}
					onChange={(e) => setInput(e.target.value)}
					list="auto-complete"
				/>
				<datalist id="auto-complete">
					<option value="Jordan 1's"></option>
					<option value="Nike Dunk"></option>
					<option value="AirForce 1's"></option>
					<option value="Converse"></option>
					<option value="Yeezy's"></option>
					<option value="Lebron's"></option>
					<option value="Kobe's"></option>
				</datalist>
				<h3
					className={css.searchButton}
					onClick={() => router.push(`/products?search=${input}`)}
				>
					Search
				</h3>
			</div>
		</div>
	);
}

export default SearchBar;
