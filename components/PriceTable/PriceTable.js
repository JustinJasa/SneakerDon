import React from 'react';
import Table from 'react-bootstrap/Table';
import StockX from '../../public/images/Stockx.png';
import Goat from '../../public/images/goat.png';
import FlightClub from '../../public/images/flightclub.png';
import StadiumGoods from '../../public/images/stadiumgoods.png';
import Image from 'next/image';
import css from './PriceTable.module.css';

function PriceTable({ priceData }) {
	const sizes = new Set([]);
	let shoeSizes;
	let prices = priceData.resellPrices;

	// fetches sizes of all resell platforms
	for (var size in prices?.stockX) {
		sizes.add(size);
	}
	for (var size in prices?.flightClub) {
		sizes.add(size);
	}
	for (var size in prices?.goat) {
		sizes.add(size);
	}
	for (var size in prices?.stadiumGoods) {
		sizes.add(size);
	}
	shoeSizes = Array.from(sizes).sort(function (a, b) {
		return a - b;
	});

	return (
		<div className={css.tableContainer}>
			<h2 className={css.heading}>Prices</h2>
			<div className={css.priceTable}>
				<Table responsive>
					<thead>
						<tr>
							<th>US Size</th>
							{Array.from(shoeSizes).map((size, index) => (
								<th key={index}> {size} </th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td onClick={() => window.open(priceData.resellLinks.stockX)}>
								<Image src={StockX} alt="stockX" width={100} height={56} />
							</td>
							{Array.from(shoeSizes).map((size, index) => (
								<td key={index}>
									<a
										href={priceData.resellLinks.stockX || 'https://stockx.com/'}
										target="_blank"
										rel="noreferrer"
									>
										{prices.stockX[size] || '--'}
									</a>
								</td>
							))}
						</tr>
						<tr>
							<td onClick={() => window.open(priceData.resellLinks.goat)}>
								<Image src={Goat} alt="stockX" width={100} height={56} />
							</td>
							{Array.from(shoeSizes).map((size, index) => (
								<td key={index}>
									<a
										href={priceData.resellLinks.goat || 'https://www.goat.com/'}
										target="_blank"
										rel="noreferrer"
									>
										{prices.goat[size] || '--'}
									</a>
								</td>
							))}
						</tr>
						<tr>
							<td onClick={() => window.open(priceData.resellLinks.flightClub)}>
								<Image src={FlightClub} alt="stockX" width={100} height={56} />
							</td>
							{Array.from(shoeSizes).map((size, index) => (
								<td key={index}>
									<a
										href={
											priceData.resellLinks.flightClub ||
											'https://www.flightclub.com/'
										}
										target="_blank"
										rel="noreferrer"
									>
										{prices.flightClub[size] || '--'}
									</a>
								</td>
							))}
						</tr>
						<tr>
							<td
								onClick={() =>
									window.open(
										priceData.resellLinks.stadiumGoods ||
											'https://www.stadiumgoods.com/en-au/'
									)
								}
							>
								<Image
									src={StadiumGoods}
									alt="stockX"
									width={100}
									height={56}
								/>
							</td>
							{Array.from(shoeSizes).map((size, index) => (
								<td key={index}>
									{prices.stadiumGoods && prices.stadiumGoods[size] ? (
										<a
											href={
												priceData.resellLinks.stadiumGoods ||
												'https://www.stadiumgoods.com/en-au/'
											}
											target="_blank"
											rel="noreferrer"
										>
											{prices.stadiumGoods[size]}
										</a>
									) : (
										'--'
									)}
								</td>
							))}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default PriceTable;
