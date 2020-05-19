import React from 'react';
import './style.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerAt from './../../asset/images/headerAt.png';

export default function Footer() {
	return (
		<Navbar className="footer" bg="light" expand="lg">
			<Link to="/dashboard/FAQ" className="Table__hide">
				<Nav>FAQ</Nav>
			</Link>
			<Link to="/contactos" className="Table__hide">
				<Nav>
					<img src={headerAt} alt="" width="50px" height="50px" /> Contactos
				</Nav>
			</Link>
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
