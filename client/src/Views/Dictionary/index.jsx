import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Form, Label, Input, Button } from 'reactstrap';
//Images
import glass from './../../asset/images/glass.png';
const axios = require('axios');

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getWord = this.getWord.bind(this);
	}

	async componentDidMount() {}

	async getWord(event) {
		event.preventDefault();
		let word = 'hello';
		let list = await axios.get(
			'https://dictapi.lexicala.com/search?source=global&language=pt&text=casa&morph=true'
		);
		console.log(list);
	}

	render() {
		return (
			<div className="Dictionary">
				<h3>Dicionário</h3>
				<Form onSubmit={this.getWord}>
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
