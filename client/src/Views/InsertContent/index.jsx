import React, { Component } from 'react';
import './style.scss';
import { Form, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { uploadFile } from '../../Services/otherServices';

class index extends Component {
	state = {};

	handleInputFile = async (event) => {
		console.log('hello', event.target.files[0]);
		console.log('hello', event.target.name);
		let what = event.target.files[0];
		let where = event.target.name;
		await this.setState({
			[where]: what,
		});
		console.log('final', this.state);
	};

	handleInputChange = async (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
	};

	saveContent = (event) => {
		event.preventDefault();
		let { Subject, Theme, Year, Sumary, Questions } = this.state;
		/* let Sumary = this.state.Sumary;
	    let = Questions;  */
		uploadFile({ Subject, Theme, Year, Sumary, Questions });
		console.log('saveContent', this.state);
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
						onChange={this.handleInputChange}
					/>
					<Input
						value={this.state.Theme}
						placeholder="Tema"
						type="text"
						name="Theme"
						onChange={this.handleInputChange}
					/>
					<Input
						value={this.state.Year}
						placeholder="Ano Lectivo"
						type="number"
						name="Year"
						onChange={this.handleInputChange}
					/>
					<Input
						type="file"
						name="Sumary"
						placeholder="Resumos"
						onChange={this.handleInputFile}
					/>
					<Input
						type="file"
						name="Questions"
						placeholder="Questões"
						onChange={this.handleInputFile}
					/>
					<Button type="submit">Guardar</Button>
				</Form>
			</div>
		);
	}
}

export default index;
