import React from 'react';
import { server } from '../config';
import Image from 'next/image';
import Link from 'next/link';
import SneakerGrid from '../components/SneakerGrid/SneakerGrid';
import css from '../components/SneakerGrid/SneakerGrid.module.css';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchedProducts from '../components/SearchedProducts/SearchedProducts';
import InitialProducts from '../components/InitialProducts/InitialProducts';

function products({ initialData, searchedData }) {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<SearchBar />
			</div>
			<SneakerGrid searchedData={searchedData} initialData={initialData} />

			{/* <SneakerGrid initialData={initialData} /> */}
			{/* {window.location.href.indexOf('search') ? (
				<InitialProducts data={initialData} />
			) : (
				<SearchedProducts searched={searchedData} />
			)} */}
		</div>
	);
}

export async function getServerSideProps(context) {
	const q = context.query.search;

	const res = await fetch(`${server}/products`);
	const data = await res.json();

	const search = await fetch(`${server}/search/${q}`);
	const searched = await search.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	if (!searched) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			initialData: data,
			searchedData: searched,
		},
	};
}

export default products;
