import React from 'react';
import css from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';

export default function Navbar() {
	return (
		<nav className={css.navbar}>
			<Image src={Logo} width={120} height={120} alt="logo" />
			<div className={css.container}>
				<a href="">
					<p className={css.navButtons}>Sneakers</p>
				</a>
				<a href="">
					<p className={css.navButtons}>About</p>
				</a>
				<a href="">
					<p className={css.navButtonWhite}>Contact Us</p>
				</a>
			</div>
		</nav>
	);
}
