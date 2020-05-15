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
		let { Subject, Theme, Year, Sumary, Questions } = this.state;
		console.log({ Subject, Theme, Year, Sumary, Questions });
		const result = await uploadMaterial({
			Subject,
			Theme,
			Year,
			Sumary,
			Questions,
		});
		this.setState({
			Subject: '',
			Theme: '',
			Year: '',
			Sumary: '',
			Questions: '',
		});
		this.props.history.push('subjects');
	};

	render() {
		return (
			<div className="Insert__Content">
				<Form onSubmit={this.saveContent} encType="multipart/form-data">
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
					<Button type="submit">Guardar</Button>
				</Form>
			</div>
		);
	}
}

export default index;
