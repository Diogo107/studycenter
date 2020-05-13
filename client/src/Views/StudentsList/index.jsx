import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Label, Input } from 'reactstrap';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';
import NewStudent from '../../Components/NewStudent';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addStudent: false,
		};
		this.newStudentTab = this.newStudentTab.bind(this);
	}

	newStudentTab() {
		console.log(this.state.addStudent);
		this.setState({
			addStudent: !this.state.addStudent,
		});
	}

	render() {
		return (
			<div className="Students__List">
				<div className="head">
					<h3>Lista de Alunos</h3>
					<button onClick={this.newStudentTab}>Adicionar novo aluno</button>
				</div>
				{this.state.addStudent && (
					<NewStudent newStudentTab={this.newStudentTab} {...this.props} />
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
						<tr>
							<th scope="row">Alberto</th>
							<td>5º</td>
							<td>4</td>
							<td>5</td>
						</tr>
						<tr>
							<th scope="row">Matemática</th>
							<td>Aqui é preciso programar</td>
							<td>Aqui é preciso programar</td>
							<td>Aqui é preciso programar</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

export default index;
