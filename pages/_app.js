import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>SneakerDon</title>
				<meta
					name="SneakerDon"
					content="An application with tracks sneaker prices"
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
