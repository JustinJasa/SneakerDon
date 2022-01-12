import React, { useEffect } from 'react';
import { server } from '../../config';
import SneakerDetail from '../../components/SneakerDetail/SneakerDetail';

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/products`);
	const sneakers = await res.json();

	const paths = sneakers.map((sneaker) => ({
		params: {
			id: sneaker.styleID,
		},
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const res = await fetch(`${server}/sneakers/${params.id}`);
	const data = await res.json();

	return {
		props: {
			sneakers: data,
		},
	};
};

function Details(props) {
	console.log(props.sneakers);

	const data = props.sneakers;

	return (
		<div>
			<SneakerDetail data={data} />
		</div>
	);
}

export default Details;
