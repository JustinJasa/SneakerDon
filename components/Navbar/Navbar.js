import React, { useEffect, useState } from 'react';
import css from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Hamburger from '../../public/images/bars-solid.svg';

export default function Navbar() {
	const router = useRouter();

	const [screenSize, setScreenSize] = useState();
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		let windowSize = window.innerWidth;
		setScreenSize(windowSize);
	}, []);

	return (
		<nav className={css.navbar}>
			<Link href="/" passHref>
				<Image src={Logo} width={120} height={120} alt="logo" />
			</Link>
			<div className={css.hamburger} onClick={() => setToggle(!toggle)}>
				<Image src={Hamburger} width={60} height={60} alt="menu" />
			</div>
			{toggle && (
				<div className={css.container}>
					<Link href="/products" passHref>
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
			)}
		</nav>
	);
}
