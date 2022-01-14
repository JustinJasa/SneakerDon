import React from 'react';
import Image from 'next/image';
import StockX from '../../public/images/Stockx.png';
import Goat from '../../public/images/goat.png';
import FlightClub from '../../public/images/flightclub.png';
import StadiumGoods from '../../public/images/stadiumgoods.png';
import css from './ResellLinks.module.css';
import Link from 'next/link';

function ResellLinks({ links }) {
	const link = links;

	return (
		<div className={css.container}>
			<Link href={link.stockX || 'https://stockx.com/'}>
				<a target="_blank" rel="noreferrer">
					<Image src={StockX} alt="StockX" width={110} height={57} />
				</a>
			</Link>
			<Link href={link.goat || 'https://www.goat.com/'}>
				<a target="_blank" rel="noreferrer">
					<Image src={Goat} alt="Goat" width={67} height={60} />
				</a>
			</Link>
			<Link href={link.flightClub || 'https://www.flightclub.com/'}>
				<a target="_blank" rel="noreferrer">
					<Image src={FlightClub} alt="FlightClub" width={150} height={37.5} />
				</a>
			</Link>
			<Link href={link.stadiumGoods || 'https://www.stadiumgoods.com/en-au/'}>
				<a target="_blank" rel="noreferrer">
					<Image
						src={StadiumGoods}
						alt="StadiumGoods"
						width={100}
						height={43}
					/>
				</a>
			</Link>
		</div>
	);
}

export default ResellLinks;
