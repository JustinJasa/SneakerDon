import React from 'react';
import css from './SneakerGrid.module.css';
import Image from 'next/image';
import Link from 'next/link';

function SneakerGrid({ data }) {
	return (
		<div className={css.container}>
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
		</div>
	);
}

export default SneakerGrid;
