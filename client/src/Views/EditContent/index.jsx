import React, { Component } from 'react';
import './style.scss';
import { Form, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { updateMaterial, getMaterial } from '../../Services/otherServices';

class index extends Component {
	state = {};

	async componentDidMount() {
		const id = this.props.match.params.id;
		let material = await getMaterial();
		let selected = material.filter((single) => single._id == id);
		let { Subject, Theme, Year, Sumary, Questions } = selected[0];
		this.setState({ Subject, Theme, Year, Sumary, Questions });
	}

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

	updateContent = async (event) => {
		event.preventDefault();
		const id = this.props.match.params.id;
		let { Subject, Theme, Year, Sumary, Questions } = this.state;
		if (Sumary == undefined || Questions == undefined) {
			alert(
				'Ohhh pateta, não escreveste nem resumos nem questões...corrige lá isso de uma vez....'
			);
		} else {
			const result = await updateMaterial({
				id,
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
			this.props.history.push('/dashboard/subjects');
		}
	};

	render() {
		return (
			<div className="Insert__Content">
				<Form onSubmit={this.updateContent} encType="multipart/form-data">
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
						value={this.state.Sumary}
						type="textarea"
						name="Sumary"
						placeholder="Resumos"
						onChange={this.handleInputChange}
					/>
					<Input
						value={this.state.Questions}
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
