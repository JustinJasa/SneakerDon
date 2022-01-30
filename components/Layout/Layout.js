import React from 'react';
import Navbar from '../Navbar/Navbar';

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}

export default Layout;
