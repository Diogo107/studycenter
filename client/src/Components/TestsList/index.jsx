import React from 'react';
import './style.scss';
import { Table } from 'reactstrap';

function index(props) {
	return (
		<div className="NewTest__Component">
			<h4>Próximos Testes</h4>
			<Table hover responsive>
				<thead>
					<tr>
						<th>#</th>
						<th>Disciplina</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Aqui é preciso programar</td>
						<td>Aqui é preciso programar</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Aqui é preciso programar</td>
						<td>Aqui é preciso programar</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default index;
