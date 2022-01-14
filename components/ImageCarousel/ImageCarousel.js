import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel({ data }) {
	const sneakerImage = data;

	const images = () => {
		return (
			<>
				<Carousel fade>
					{/* {sneakerImage.map((image) => {
						<Carousel.Item>
							<Image src={image} alt="image" width={300} height={300} />;
						</Carousel.Item>;
					})} */}
					<Carousel.Item>
						<Image src={sneakerImage[0]} alt="image" width={500} height={500} />
					</Carousel.Item>
					<Carousel.Item>
						<Image src={sneakerImage[1]} alt="image" width={500} height={500} />
					</Carousel.Item>
					<Carousel.Item>
						<Image src={sneakerImage[2]} alt="image" width={500} height={500} />
					</Carousel.Item>
					<Carousel.Item>
						<Image src={sneakerImage[3]} alt="image" width={500} height={500} />
					</Carousel.Item>
					<Carousel.Item>
						<Image src={sneakerImage[4]} alt="image" width={500} height={500} />
					</Carousel.Item>
				</Carousel>
			</>
		);
	};

	return <div>{images()}</div>;
}

export default ImageCarousel;
