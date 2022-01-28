import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { server } from '../../config';
import Image from 'next/image';
import Link from 'next/link';
import css from './SearchedProducts.module.css';
import { useRouter } from 'next/router';

function SearchedProducts({ searched }) {
	let sneakers = searched;

	// const [sneakers, setSneakers] = useState();

	// setSneakers(searched);

	console.log(sneakers);

	const router = useRouter();

	// const fetchData = async () => {
	// 	const res = await fetch(`${server}/search/${searched}`);
	// 	const data = await res.json();
	// 	setSneakers(data);
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, [searched]);

	return (
		<div className={css.container}>
			{sneakers ? (
				sneakers.map((sneaker) => {
					return (
						<>
							<div
								className={css.card}
								onClick={() => router.push(`/${sneaker.styleID}`)}
								key={sneaker._id}
							>
								<Image
									className={css.thumbnail}
									src={sneaker.thumbnail}
									alt={sneaker.shoeName}
									width={200}
									height={200}
								/>
								<hr />
								<h2 className={css.title}>{sneaker.shoeName}</h2>
								<p className={css.description}>
									{`${sneaker.description.substring(0, 120)}...` ||
										`No description`}
								</p>
							</div>
						</>
					);
				})
			) : (
				<div>YEEEEEEEE</div>
			)}
		</div>
	);
}

export default SearchedProducts;
