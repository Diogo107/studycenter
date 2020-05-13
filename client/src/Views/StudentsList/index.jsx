import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Label, Input } from 'reactstrap';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';
import NewStudent from '../../Components/NewStudent';
import { signUp } from '../../Services/authentication';
import { StudentsList } from './../../Services/otherServices';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addStudent: false,
		};
		this.newStudentTab = this.newStudentTab.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	async componentDidMount() {
		let list = await StudentsList();
		console.log('this is the page', list);
		this.setState({
			list: list,
		});
	}

	newStudentTab() {
		console.log(this.state.addStudent);
		this.setState({
			addStudent: !this.state.addStudent,
		});
	}

	handleInputChange(event) {
		const value = event.target.value;
		const inputName = event.target.name;
		console.log(this.state);
		this.setState({
			[inputName]: value,
		});
	}

	async sendMessage(event) {
		event.preventDefault();
		console.log(this.state);
		let { email, name, year, passwordHash } = this.state;
		await signUp({ email, name, year, passwordHash });
		this.newStudentTab();
		this.componentDidMount();
	}

	render() {
		return (
			<div className="Students__List">
				<div className="head">
					<h3>Lista de Alunos</h3>
					<button onClick={this.newStudentTab}>Adicionar novo aluno</button>
				</div>
				{this.state.addStudent && (
					<NewStudent
						sendMessage={this.sendMessage}
						handleInputChange={this.handleInputChange}
						{...this.props}
					/>
				)}
				<Table hover>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Ano</th>
							<th>Comportamento</th>
							<th>Aproveitamento</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">
								{' '}
								<Input placeholder="Filtrar Nome..." />
							</th>
							<td>
								{' '}
								<Input placeholder="Filtrar Ano..." />
							</td>
							<td>
								{' '}
								<Input placeholder="Filtrar Comportamento..." />
							</td>
							<td>
								{' '}
								<Input placeholder="Filtrar Aproveitamento..." />
							</td>
						</tr>
						{this.state.list &&
							this.state.list.map((single) => (
								<tr>
									{console.log('this is single', single)}
									<th scope="row">{single.name}</th>
									<td>{single.year}º</td>
									<td>{single.behaviour}</td>
									<td>{single.achievement}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default index;
