import React, { Component } from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	submitForm = async (event) => {
		event.preventDefault();
		let article = this.state;
		console.log('submit', this.state);
	};

	handleInputChange = async (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
	};

	render() {
		return (
			<div className="Articles__View">
				<Form onSubmit={this.submitForm}>
					<Input
						onChange={this.handleInputChange}
						name="title"
						type="text"
						placeholder="Título"
					/>
					<Input
						onChange={this.handleInputChange}
						name="content"
						type="textarea"
						placeholder="Corpo de texto..."
					/>
					<Button>Guardar</Button>
				</Form>
			</div>
		);
	}
}

export default index;
