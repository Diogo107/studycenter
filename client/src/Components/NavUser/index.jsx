import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { signOut } from '../../Services/authentication';
import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import { Form, Button } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';
import Avatar from '@material-ui/core/Avatar';

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			user: null,
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleSignOut = this.handleSignOut.bind(this);
		this.changeInput = this.changeInput.bind(this);
	}

	componentDidMount() {
		console.log(this.state.user);
		console.log('NavUser', this.props);
		this.setState({
			user: this.props.user,
		});
	}

	handleSignOut() {
		signOut();
		this.props.updateUserInformation(null);
	}

	changeInput(path) {
		switch (path) {
			case '/dashboard/overview':
				return 'Dashboard';
				break;
			case '/dashboard/chat':
				return 'Chat';
				break;
			case '/dashboard/profile':
				return 'Profile';
				break;
			case '/dashboard/dictionary':
				return 'Dicionário';
				break;
			case '/dashboard/subjects':
				return 'Conteúdos';
				break;
			case '/dashboard/daily-challenge':
				return 'Desafio Diário';
				break;
			case '/dashboard/articles':
				return 'Artigos';
				break;
			case '/dashboard/faqs':
				return 'Questões Frequentes';
				break;
			case '/dashboard/students-list':
				return 'Lista de Alunos';
				break;
			case '/dashboard/insert':
				return 'Inserir';
				break;
		}
	}

	render() {
		return (
			<>
				{(this.state.user && (
					<Navbar className="Navbar__User" bg="transparent" expand="lg">
						<Link to="/dashboard/overview">
							<img className="logo" src={logo} />
						</Link>
						<Navbar.Brand className="navuser__path" href="/">
							{this.changeInput(this.props.history.location.pathname)}
						</Navbar.Brand>
						<div className=" links">
							<Nav className="mobileuser">
								<Avatar alt="Remy Sharp" src={this.state.user.picture} />
								<Nav.Link className="mobilename" href="/profile">
									{this.state.user.name}
								</Nav.Link>
							</Nav>
						</div>
					</Navbar>
				)) ||
					''}
			</>
		);
	}
}
