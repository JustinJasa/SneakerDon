import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingPage from '../components/LandingPage/LandingPage';

//Data Fetching products
export async function getStaticProps() {
	const popular = await fetch(`http://localhost:8080/popular`);
	const popularData = await popular.json();

	if (!popularData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			popular: popularData,
		}, // will be passed to the page component as props
	};
}

export default function Home({ popular, sneakers }) {
	return (
		<div>
			<LandingPage popular={popular} />
		</div>
	);
}
