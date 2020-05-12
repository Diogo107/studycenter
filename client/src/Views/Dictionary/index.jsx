import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Form, Label, Input, Button } from 'reactstrap';
//Images
import glass from './../../asset/images/glass.png';

class index extends Component {
	render() {
		return (
			<div className="Dictionary">
				<h3>Dicionário</h3>
				<Form>
					<InputGroup>
						<Label>Pesquisa:</Label>
						<Input placeholder="Palavra a procurar..." />
					</InputGroup>
					<button>
						<img src={glass} alt="arrow" />
					</button>
				</Form>
				<p>Aqui vão aparecer os resultados da pesquisa</p>
			</div>
		);
	}
}

export default index;
