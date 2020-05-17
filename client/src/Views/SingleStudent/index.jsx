import React, { Component } from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//Services
import { StudentsList, updateStudent } from '../../Services/otherServices';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	async componentDidMount() {
		const list = await StudentsList();
		const id = this.props.match.params.id;
		const student = list.filter((single) => single._id == id);
		const { name, email, year, behaviour, achievement } = student[0];
		this.setState({
			id,
			name,
			email,
			year,
			behaviour,
			achievement,
		});
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const data = this.state;
		let { name, email, year, behaviour, achievement } = this.state;
		const final = await updateStudent(data);
		this.setState({ name, email, year, behaviour, achievement });
	};

	handleInputChange = async (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		console.log(this.state);
		await this.setState({
			[inputName]: value,
		});
	};

	render() {
		return (
			<div className="Single__Student">
				<Form onSubmit={this.handleSubmit}>
					<Label>Nome</Label>
					<Input
						required
						onChange={this.handleInputChange}
						value={this.state.name}
						name="name"
					/>
					<Label>Email</Label>
					<Input
						required
						onChange={this.handleInputChange}
						value={this.state.email}
						name="email"
					/>
					<div>
						<Label>Ano Lectivo</Label>
						<Input
							required
							min="1"
							max="12"
							onChange={this.handleInputChange}
							value={this.state.year}
							name="year"
							type="number"
						/>
						<Label>Comportamento</Label>
						<Input
							required
							min="1"
							max="5"
							type="number"
							onChange={this.handleInputChange}
							value={this.state.behaviour}
							name="behaviour"
						/>
						<Label>Aproveitamento</Label>
						<Input
							required
							min="1"
							max="5"
							type="number"
							onChange={this.handleInputChange}
							value={this.state.achievement}
							name="achievement"
						/>
					</div>
					<Button type="submit">Actualizar</Button>
				</Form>
			</div>
		);
	}
}

export default index;
