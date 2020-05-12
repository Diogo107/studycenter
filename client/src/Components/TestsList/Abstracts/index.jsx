import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Label, Input } from 'reactstrap';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';

class index extends Component {
	render() {
		return (
			<div className="Abstracts">
				<h3>Procurar por:</h3>
				<section>
					<InputGroup>
						<Label>Disciplina</Label>
						<Input />
					</InputGroup>
					<InputGroup>
						<Label>Tema</Label>
						<Input />
					</InputGroup>
				</section>
				<Table hover>
					<thead>
						<tr>
							<th>Disciplina</th>
							<th>Tema</th>
							<th>Resumos</th>
							<th>Questões</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Português</th>
							<td>Aqui é preciso programar</td>
							<td>Aqui é preciso programar</td>
							<td>Aqui é preciso programar</td>
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
