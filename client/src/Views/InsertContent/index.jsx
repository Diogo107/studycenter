import React, { Component } from 'react';
import './style.scss';
import { Form, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { uploadMaterial } from '../../Services/otherServices';

class index extends Component {
	state = {};

	handleInputFile = async (event) => {
		let { name, files } = event.target;
		await this.setState({
			[name]: files[0],
		});
		console.log(this.state);
	};

	handleInputChange = async (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
	};

	saveContent = async (event) => {
		event.preventDefault();
		let { Subject, Theme, Year, Sumary, Questions, file } = this.state;
		console.log({ Subject, Theme, Year, Sumary, Questions, file });
		if (Sumary == undefined && Questions == undefined) {
			alert(
				'Ohhh pateta, não escreveste nem resumos nem questões...corrige lá isso de uma vez....'
			);
		} else {
			const result = await uploadMaterial({
				Subject,
				Theme,
				Year,
				Sumary,
				Questions,
				file,
			});
			this.setState({
				Subject: '',
				Theme: '',
				Year: '',
				Sumary: '',
				Questions: '',
				file: null,
			});
			this.props.history.push('subjects');
		}
	};

	render() {
		return (
			<div className="Insert__Content">
				<Form
					onSubmit={this.saveContent}
					method="pot"
					enctype="multipart/form-data"
				>
					<Input
						value={this.state.Subject}
						placeholder="Disciplina"
						type="text"
						name="Subject"
						required
						onChange={this.handleInputChange}
					/>
					<Input
						value={this.state.Theme}
						placeholder="Tema"
						type="text"
						name="Theme"
						required
						onChange={this.handleInputChange}
					/>
					<Input
						value={this.state.Year}
						placeholder="Ano Lectivo"
						type="number"
						name="Year"
						min="1"
						max="12"
						required
						onChange={this.handleInputChange}
					/>
					<Input
						type="textarea"
						name="Sumary"
						placeholder="Resumos"
						onChange={this.handleInputChange}
					/>
					<Input
						type="textarea"
						name="Questions"
						placeholder="Questões"
						onChange={this.handleInputChange}
					/>
					<Input type="file" name="file" onChange={this.handleInputFile} />
					<Button type="submit">Guardar</Button>
				</Form>
			</div>
		);
	}
}

export default index;
