import React from 'react';
import Image from 'next/image';
import LandingPageImage from '../../public/images/LandingPageImage.png';
import Goat from '../../public/images/goat.png';
import StockX from '../../public/images/Stockx.png';
import StadiumGoods from '../../public/images/stadiumgoods.png';
import FlightClub from '../../public/images/flightclub.png';
import css from './LandingPage.module.css';
import PopularProducts from '../PopularProducts/PopularProducts';

function LandingPage({ popular }) {
	const data = popular;

	return (
		<>
			<section className={css.container}>
				<div className={css.descriptionContainer}>
					<div>
						<h2 className={css.slogan}>
							Track your favourite sneakers with ease!
						</h2>
						<p className={css.description}>
							At SneakerDon we&apos;ve made it easy to track the prices of your
							favourite sneaker from the top sneaker marketplaces
						</p>
					</div>
					<div>
						<h3 className={css.find}>Find your sneaker...</h3>
						<div className={css.buttonContainer}>
							<input
								type="text"
								placeholder="E.g. Jordan 1's"
								className={css.search}
							/>
							<h3 className={css.searchButton}>Search</h3>
						</div>
					</div>
				</div>
				<div>
					<Image
						src={LandingPageImage}
						alt="Jordan 1's"
						width={600}
						height={600}
					/>
					<div className={css.logoContainers}>
						<Image
							src={StadiumGoods}
							alt="StadiumGoods"
							width={100}
							height={43}
							className={css.logo}
						/>
						<Image
							src={FlightClub}
							alt="FlightClub"
							width={150}
							height={37.5}
							className={css.logo}
						/>
						<Image
							src={StockX}
							alt="StockX"
							width={110}
							height={57}
							className={css.logo}
						/>
						<Image
							src={Goat}
							alt="Goat"
							width={67}
							height={65}
							className={css.logo}
						/>
					</div>
				</div>
			</section>
			<PopularProducts popular={data} />
		</>
	);
}

export default LandingPage;
