import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { server } from '../../config';
import Image from 'next/image';
import Link from 'next/link';
import css from './SearchedProducts.module.css';

function SearchedProducts({ searched }) {
	// const { data, error } = useSWR('sneakers', async () => {
	// 	const res = await fetch(`${server}/sneakers/${search}`);
	//   const data = await res.json();
	// 	return data;
	// });

	// if (error) return 'An error has occured';
	// if (!data) return 'loading...';
	// console.log(data);
	// console.log(search);

	const [sneakers, setSneakers] = useState();
	console.log(searched);

	const fetchData = async () => {
		const res = await fetch(`${server}/search/${searched}`);
		const data = await res.json();
		setSneakers(data);
		console.log(data);
	};

	useEffect(() => {
		fetchData();
	}, [searched]);

	console.log(sneakers);

	return (
		<div className={css.grid}>
			{sneakers &&
				sneakers.map((sneaker, i) => {
					return (
						<>
							<Link
								href={`/sneakers/${sneaker.styleID}`}
								key={sneaker._id}
								passHref
							>
								<div className={css.card}>
									<Image
										className={css.thumbnail}
										src={sneaker.thumbnail}
										alt={sneaker.shoeName}
										width={200}
										height={200}
									/>
									<h2 className={css.title}>{sneaker.shoeName}</h2>
								</div>
							</Link>
						</>
					);
				})}
		</div>
	);
}

export default SearchedProducts;
