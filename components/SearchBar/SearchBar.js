import React, { useState, useEffect } from 'react';
import css from './SearchBar.module.css';
import { useRouter } from 'next/router';
import { client } from '../../config';
import { server } from '../../config';
import useSWR from 'swr';

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
					onChange={(e) => setInput(e.target.search)}
				/>
				<h3 className={css.searchButton}>Search</h3>
			</div>
		</div>
	);
}

export default SearchBar;
