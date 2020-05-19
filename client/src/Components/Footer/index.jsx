import React from 'react';
import './style.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerAt from './../../asset/images/headerAt.png';

export default function Footer() {
	return (
		<Navbar className="footer" bg="light" expand="lg">
			<Nav>
				<small>
					2020© Ventos Traquinas by{' '}
					<a
						className="footer__link"
						href="https://github.com/Diogo107"
						target="_blank"
					>
						Diogo Santos
					</a>
				</small>
			</Nav>
		</Navbar>
	);
}
