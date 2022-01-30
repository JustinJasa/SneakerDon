import React, { useState } from 'react';
import css from './SneakerGrid.module.css';
import SearchBar from '../SearchBar/SearchBar';
import InitialProducts from '../InitialProducts/InitialProducts';
import SearchedProducts from '../SearchedProducts/SearchedProducts';
import Spinner from '../Spinner/Spinner';
import { useRouter } from 'next/router';

function SneakerGrid({ initialData, searchedData }) {
	const initial = initialData;
	const searched = searchedData;
	const router = useRouter();
	const path = router.asPath;

	return (
		<div className={css.container}>
			{path.indexOf('search') > -1 ? (
				<SearchedProducts searched={searched} />
			) : (
				<InitialProducts data={initial} />
			)}
		</div>
	);
}

export default SneakerGrid;
