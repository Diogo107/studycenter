import React, { Component } from 'react';
import './style.scss';

import { Form, Button } from 'react-bootstrap';
import { signOut } from '../../Services/authentication';
import { Link, Redirect } from 'react-router-dom';
import logout from '../../asset/images/logout.png';

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			user: null,
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleSignOut = this.handleSignOut.bind(this);
	}

	componentDidMount() {
		this.setState({
			user: this.props.user,
		});
	}

	handleSignOut() {
		signOut();
		Redirect('/');
	}

	render() {
		return (
			<div
				className="sidebar"
				id="sidebar"
				onClick={() => {
					let sidebar = document.getElementById('sidebar');
					console.log(sidebar);
					sidebar.style.display == 'flex'
						? (sidebar.style.display = 'none')
						: (sidebar.style.display = 'flex');
				}}
			>
				<div className="sidebar__item">
					<Link to="/dashboard/overview">Geral</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/chat">Chat</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/annotations">Anotações</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/subjects">Conteúdos</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/daily-challenge">Desafio Diário</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/articles">Artigos</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/faqs">FAQ's</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/insert">Inserir</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/students-list">Lista de Alunos</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/test-list">Lista de Testes</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/announcements">Criar Comunicação</Link>
				</div>

				<Form className="signout__button" onSubmit={this.handleSignOut}>
					<Button className="button__test" type="submit">
						Sign Out
						<img src={logout} alt="sair" />
					</Button>
				</Form>
			</div>
		);
	}
}
