import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import css from './PriceTable.module.css';
import useSWR from 'swr';

const fetcher = async (...args) => {
	fetch(...args).then((res) => res.json());
};

function PriceTable({ priceData }) {
	// fetches currency data
	const { data, error } = useSWR(
		`https://v6.exchangerate-api.com/v6/0d0a0747b0adbacd91aba2b9/latest/USD`,
		fetcher
	);

	const [currencies] = useState(['EUR, AUD, USD']);

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
			<h2 className={css.heading}>Marketplace Prices</h2>
			{/* <select id="size" name="size">
				{}
			</select> */}
			<div className={css.priceTable}>
				<Table striped bordered hover responsive>
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
								<h4 className={css.title}>Stock X</h4>
							</td>
							{Array.from(shoeSizes).map((size, index) => (
								<td key={index}>
									<a
										href={priceData.resellLinks.stockX || 'https://stockx.com/'}
										target="_blank"
										rel="noreferrer"
									>
										{/* {(data.conversion_rates.AUD &&
											Math.round(
												prices.stockX[size] * data.conversion_rates.AUD
											)) ||
											'-'} */}
										{Math.round(prices.stockX[size]) || '--'}
									</a>
								</td>
							))}
						</tr>
						<tr>
							<td onClick={() => window.open(priceData.resellLinks.goat)}>
								<h4 className={css.title}>Goat</h4>
							</td>
							{Array.from(shoeSizes).map((size, index) => (
								<td key={index}>
									<a
										href={priceData.resellLinks.goat || 'https://www.goat.com/'}
										target="_blank"
										rel="noreferrer"
									>
										{/* {(data.conversion_rates.AUD &&
											Math.round(
												prices.goat[size] * data.conversion_rates.AUD
											)) ||
											'-'} */}
										{Math.round(prices.goat[size]) || '--'}
									</a>
								</td>
							))}
						</tr>
						<tr>
							<td onClick={() => window.open(priceData.resellLinks.flightClub)}>
								<h4 className={css.title}>Flight Club</h4>
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
										{/* {(data.conversion_rates.AUD &&
											Math.round(
												prices.flightClub[size] * data.conversion_rates.AUD
											)) ||
											'-'} */}
										{Math.round(prices.flightClub[size]) || '--'}
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
								<h4 className={css.title}>Stadium Goods</h4>
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
											{(data.conversion_rates.AUD &&
												Math.round(prices.stadiumGoods[size])) ||
												'-'}
										</a>
									) : (
										'-'
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
