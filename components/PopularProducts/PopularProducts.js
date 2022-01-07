import React, { useEffect } from 'react';

function PopularProducts() {
	const getPopularSneakers = async () => {
		const data = await fetch('http://localhost:8080/popular');
		let popular = await data.json();
		console.log(popular);
	};

	useEffect(() => {
		getPopularSneakers();
	});

	return (
		<div>
			<div>Hello Putas</div>
		</div>
	);
}

export default PopularProducts;
