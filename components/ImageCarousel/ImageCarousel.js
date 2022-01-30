import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';

// Carousel Currently not working using one image at the moment

function ImageCarousel({ data }) {
	const sneakerImage = data;

	const images = () => {
		return (
			<>
				<div>
					<Image src={sneakerImage[0]} alt="image" width={500} height={500} />
				</div>
			</>
		);
	};

	// const images = () => {
	// 	if (sneakerImage?.length > 0) {
	// 		return sneakerImage.map((image, i) => (
	// 			<Carousel.Item key={i}>
	// 				<Image src={image} width={300} height={300} alt="image"></Image>
	// 			</Carousel.Item>
	// 		));
	// 	} else {
	// 		return (
	// 			<Carousel.Item>
	// 				<Image src={props.image} width={300} height={300} alt="image"></Image>
	// 			</Carousel.Item>
	// 		);
	// 	}
	// };

	return <div>{images()}</div>;
}

export default ImageCarousel;
