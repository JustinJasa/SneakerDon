import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { server } from '../../config';
import Image from 'next/image';
import css from './RelatedProducts.module.css';
import { useRouter } from 'next/router';

function RelatedProducts({ related }) {
	const [relatedSneakers, setRelatedSneakers] = useState();
	const [random1, setRandom1] = useState();
	const [random2, setRandom2] = useState();

	const router = useRouter();

	const similar = related.make;

	const fetchRelated = async () => {
		const res = await fetch(`${server}/search/${similar}`);
		const data = await res.json();
		setRelatedSneakers(data);
	};

	// implement better related data fetching later
	// const getRandomNumber = () => {
	// 	setRandom1(Math.floor(Math.random() * 3 + 2));
	// 	setRandom2(Math.floor(Math.random() * 3 + 5));
	// };

	const getProductPage = (sneaker) => {
		router.push(`/${sneaker.styleID}`);
	};

	useEffect(() => {
		fetchRelated();
	}, []);

	return (
		<div>
			<div className={css.heading}>
				<h2>You may also like...</h2>
			</div>
			<div className={css.container}>
				{relatedSneakers &&
					relatedSneakers.slice(1, 5).map((sneaker, i) => {
						return (
							<>
								<div
									key={i}
									className={css.card}
									onClick={() => getProductPage(sneaker)}
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
								</div>
							</>
						);
					})}
			</div>
		</div>
	);
}

export default RelatedProducts;
