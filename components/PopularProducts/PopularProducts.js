import React, { useEffect, useState } from 'react';
import css from './PopularProducts.module.css';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function PopularProducts({ popular }) {
	const data = popular;

	const router = useRouter();

	return (
		<div>
			<div className={css.heading}>
				<h1>Popular Sneakers</h1>
			</div>
			<div className={css.container}>
				{data.slice(0, 10).map((sneaker, i) => {
					return (
						<>
							<div
								key={i}
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
export default PopularProducts;
