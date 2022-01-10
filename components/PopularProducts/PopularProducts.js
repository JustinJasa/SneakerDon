import React, { useEffect, useState } from 'react';
import css from './PopularProducts.module.css';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

function PopularProducts({ popular }) {
	const data = popular;

	return (
		<div>
			<div className={css.heading}>
				<h1>Popular Sneakers</h1>
			</div>
			<div className={css.container}>
				<div className={css.carousel}>
					{data.map((sneaker, i) => {
						return (
							<>
								<Link
									href={`/sneakers/${sneaker._id}`}
									key={sneaker._id}
									passHref
								>
									<div className={css.card}>
										<Image
											loader={() => sneaker.thumbnail}
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
			</div>
		</div>
	);
}
export default PopularProducts;
