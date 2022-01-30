import React, { useEffect, useState } from 'react';
import { server } from '../config';
import SneakerDetail from '../components/SneakerDetail/SneakerDetail';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
	const styleID = context.query.id;

	const res = await fetch(`${server}/sneakers/${styleID}`);
	const data = await res.json();

	return {
		props: {
			sneakers: data,
		},
	};
}

function Details({ sneakers }) {
	return (
		<div>
			<SneakerDetail data={sneakers} />
		</div>
	);
}

export default Details;
