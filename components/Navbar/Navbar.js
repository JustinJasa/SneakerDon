import React from 'react';
import css from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
	const router = useRouter();

	return (
		<nav className={css.navbar}>
			<Image src={Logo} width={120} height={120} alt="logo" />
			<div className={css.container}>
				<Link href="/products">
					<p className={css.navButtons}>Sneakers</p>
				</Link>
				<a
					href="https://github.com/JustinJasa/SneakerDon"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p className={css.navButtons}>About</p>
				</a>
				<a href="">
					<p className={css.navButtonWhite}>Contact Us</p>
				</a>
			</div>
		</nav>
	);
}
