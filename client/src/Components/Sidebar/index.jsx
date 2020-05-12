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
			<div className="sidebar">
				<div className="sidebar__item">
					<Link to="/dashboard/overview">Geral</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/chat">Chat</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/dictionary">Dicionário</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/abstracts">Resumos</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/exercises">Exercícios</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/faqs">FAQ's</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/daily-challenge">Desafio Diário</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/articles">Artigos</Link>
				</div>
				<div className="sidebar__item">
					<Link to="/dashboard/insert">Inserir</Link>
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
