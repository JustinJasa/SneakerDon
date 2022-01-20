import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from './InitialProducts.module.css';

function InitialProducts({ data }) {
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
								<h2 className={css.title}>{sneaker.shoeName}</h2>
							</div>
						</Link>
					</>
				);
			})}
		</div>
	);
}

export default InitialProducts;
