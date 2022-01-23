import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { server } from '../../config';
import Image from 'next/image';
import Link from 'next/link';
import css from './SearchedProducts.module.css';
import { useRouter } from 'next/router';

function SearchedProducts({ searched }) {
	const [sneakers, setSneakers] = useState();
	const router = useRouter();

	const fetchData = async () => {
		const res = await fetch(`${server}/search/${searched}`);
		const data = await res.json();
		setSneakers(data);
	};

	useEffect(() => {
		fetchData();
	}, [searched]);

	return (
		<div className={css.grid}>
			{sneakers &&
				sneakers.map((sneaker, i) => {
					return (
						<>
							<div
								className={css.card}
								onClick={() => router.push(`/sneakers/${sneaker.styleID}`)}
							>
								<Image
									className={css.thumbnail}
									src={sneaker.thumbnail}
									alt={sneaker.shoeName}
									width={200}
									height={200}
								/>
								<h2 className={css.title}>{sneaker.shoeName}</h2>
							</div>
						</>
					);
				})}
		</div>
	);
}

export default SearchedProducts;
