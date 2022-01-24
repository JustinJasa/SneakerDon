import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from './InitialProducts.module.css';

function InitialProducts({ data }) {
	console.log(data);

	return (
		<div className={css.grid}>
			{data.map((sneaker, i) => {
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
								<hr />
								<h2 className={css.title}>{sneaker.shoeName}</h2>
								<p className={css.description}>
									{`${sneaker.description.substring(0, 120)}...` ||
										`No description`}
								</p>
							</div>
						</Link>
					</>
				);
			})}
		</div>
	);
}

export default InitialProducts;
