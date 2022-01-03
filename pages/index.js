import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingPage from '../components/LandingPage/LandingPage';

export default function Home() {
	return (
		<div>
			<LandingPage />
		</div>
	);
}
