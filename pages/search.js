import React from 'react';
import { server } from '../config';
import Image from 'next/image';
import Link from 'next/link';
import SneakerGrid from '../components/SneakerGrid/SneakerGrid';
import css from '../components/SneakerGrid/SneakerGrid.module.css';
import SearchBar from '../components/SearchBar/SearchBar';

function products() {
	return (
		<div>
			<SneakerGrid />
		</div>
	);
}

export default products;
