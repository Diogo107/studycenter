import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Form, Label, Input, Button } from 'reactstrap';
//Images
import pencil from './../../asset/images/pencil.png';
const axios = require('axios');

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.addNote = this.addNote.bind(this);
	}

	async componentDidMount() {}

	async addNote(event) {
		event.preventDefault();
		console.log('hello');
	}

	render() {
		return (
			<div className="Dictionary">
				<h3>Dicionário</h3>
				<Form onSubmit={this.addNote}>
					<Input
						type="textarea"
						name="text"
						id="exampleText"
						placeholder="Adicionar nota..."
					/>
					<button>
						Adicionar nota <img src={pencil} alt="arrow" />
					</button>
				</Form>
				<InputGroup>
					{/* <Label>Pesquisa:</Label> */}
					<Input placeholder="Que nota estamos à procura...?" />
				</InputGroup>
				<p>Aqui vão aparecer os resultados da pesquisa</p>
			</div>
		);
	}
}

export default index;
