import React from 'react';
import { server } from '../config';
import Image from 'next/image';
import Link from 'next/link';
import SneakerGrid from '../components/SneakerGrid/SneakerGrid';
import css from '../components/SneakerGrid/SneakerGrid.module.css';
import SearchBar from '../components/SearchBar/SearchBar';

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`${server}/products`);
	const sneakers = await res.json();

	if (!sneakers) {
		return {
			notFound: true,
		};
	}

	// Pass data to the page via props
	return { props: { sneakers } };
}

function products({ sneakers }) {
	return (
		<div>
			<div className={css.input}>
				<SearchBar />
			</div>
			<SneakerGrid data={sneakers} />
		</div>
	);
}

export default products;
