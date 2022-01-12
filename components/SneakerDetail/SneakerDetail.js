import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

function SneakerDetail({ data }) {
	const sneakerData = data;
	const images = sneakerData.imageLinks;

	return (
		<div>
			<div>
				<div>
					<Image src={images[0]} alt="Image" width={300} height={300} />
					<Image src={images[1]} alt="Image" width={300} height={300} />
					<Image src={images[2]} alt="Image" width={300} height={300} />
					<Image src={images[3]} alt="Image" width={300} height={300} />
					<Image src={images[4]} alt="Image" width={300} height={300} />
				</div>
			</div>
		</div>
	);
}

export default SneakerDetail;
