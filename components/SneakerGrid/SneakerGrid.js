import React, { useState } from 'react';
import css from './SneakerGrid.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { server } from '../../config';
import SearchBar from '../SearchBar/SearchBar';
import InitialProducts from '../InitialProducts/InitialProducts';
import SearchedProducts from '../SearchedProducts/SearchedProducts';

const fetcher = async () => {
	const res = await fetch(`${server}/products`);
	const data = await res.json();
	return data;
};

function SneakerGrid() {
	const { data, error } = useSWR('sneakers', fetcher);
	const [search, setSearch] = useState('');

	if (error) return 'An error has occured';
	if (!data) return 'loading...';

	return (
		<div className={css.container}>
			<div className={css.buttonContainer}>
				<input
					type="text"
					placeholder="Jordan 1's"
					className={css.search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			{search ? (
				<SearchedProducts searched={search} />
			) : (
				<InitialProducts data={data} />
			)}
		</div>
	);
}

export default SneakerGrid;

// data fetching using swr here,
/* 

	ternary function 
 	if searched map the search items else display popular items

 */
