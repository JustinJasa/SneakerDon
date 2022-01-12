import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

// do data fetching here so that all pages can access the data

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
