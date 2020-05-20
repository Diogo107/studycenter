import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { signOut } from '../../Services/authentication';
import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import { Form, Button } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';
import menu from '../../asset/images/menu.png';
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
		this.showSidebar = this.showSidebar.bind(this);
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
	showSidebar() {
		let elements = document.getElementsByClassName('sidebar');
		let sidebar = document.getElementById('sidebar');
		console.log(sidebar);
		sidebar.style.display == 'flex'
			? (sidebar.style.display = 'none')
			: (sidebar.style.display = 'flex');
		/* for (let i = 0; i < elements.length; i++) {
			elements[i].style.display == 'none'
				? (elements[i].style.display = 'flex')
				: (elements[i].style.display = 'none');
		} */
		console.log('hello', sidebar);
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
			case '/dashboard/annotations':
				return 'Minhas Notas';
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
			case '/dashboard/test-list':
				return 'Lista de Testes';
				break;
			case '/dashboard/announcements':
				return 'Criar Comunicado';
				break;
			case '/dashboard/Profile':
				return 'Perfil';
				break;
		}
	}

	render() {
		return (
			<>
				{(this.state.user && (
					<Navbar className="Navbar__User fixed" bg="transparent" expand="lg">
						<button onClick={this.showSidebar}>
							<img className="logo" src={menu} />
						</button>
						<Navbar.Brand className="navuser__path" href="">
							{this.changeInput(this.props.history.location.pathname)}
						</Navbar.Brand>
						<div className=" links">
							<Link to="/dashboard/profile">
								<Nav className="mobileuser">
									<Avatar alt="Remy Sharp" src={this.state.user.picture} />
									<h6 className="mobilename">{this.state.user.name}</h6>
								</Nav>
							</Link>
						</div>
					</Navbar>
				)) ||
					''}
			</>
		);
	}
}
