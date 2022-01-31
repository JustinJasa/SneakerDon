import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import css from './SneakerDetail.module.css';
import ResellLinks from '../ResellLinks/ResellLinks';
import PriceTable from '../PriceTable/PriceTable';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

function SneakerDetail({ data }) {
	const sneakerData = data;
	const images = sneakerData.imageLinks;
	const links = sneakerData.resellLinks;
	const thumbnail = sneakerData.thumbnail;
	console.log(data);

	return (
		<div>
			<div className={css.headerContainer}>
				<div>
					<ImageCarousel data={images} thumbnail={thumbnail} />
				</div>
				<div>
					<h2>{data.shoeName}</h2>
					<div className={css.brand}>
						<h5 className={css.brandTitle}>Brand:</h5>
						<h5>{data.brand}</h5>
					</div>
					<ResellLinks links={links} />
				</div>
			</div>
			<div className={css.descriptionContainer}>
				<h2 className={css.descriptionTitle}>Sneaker Description</h2>
				<p className={css.description}>
					{data.description || 'No Description'}
				</p>
			</div>
			<hr />
			<div className={css.detailsContainer}>
				<div>
					<h3 className={css.detailTitle}>BRAND</h3>
					<span className={css.detail}>{data.brand}</span>
				</div>
				<div>
					<h3 className={css.detailTitle}>RELEASE DATE</h3>
					<span className={css.detail}>{data.releaseDate}</span>
				</div>
				<div>
					<h3 className={css.detailTitle}>STYLEID</h3>
					<span className={css.detail}>{data.styleID}</span>
				</div>
				<div>
					<h3 className={css.detailTitle}>RETAIL PRICE</h3>
					<span className={css.detail}>${`${data.retailPrice}`}</span>
				</div>
				<div>
					<h3 className={css.detailTitle}>COLORWAY</h3>
					<span className={css.detail}>{data.colorway}</span>
				</div>
			</div>
			<hr />
			<PriceTable priceData={sneakerData} />
			<RelatedProducts related={sneakerData} />
		</div>
	);
}

export default SneakerDetail;
