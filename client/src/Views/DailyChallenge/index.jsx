import React, { Component } from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//Services
import {
	getDailyChallenge,
	uploadDailyChallenge,
} from '../../Services/otherServices';
import moment from 'moment';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentDidMount() {
		let list = await getDailyChallenge();
		console.log('articles', list);
		this.setState({ list });
	}

	submitForm = async (event) => {
		event.preventDefault();
		let { title, content } = this.state;
		await uploadDailyChallenge({ title, content });
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
			<div className="DailyChallenge__View">
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
				{this.state.list &&
					this.state.list.map((single) => (
						<div className="Single__Article">
							<h3>{single.title}</h3>
							<p>{single.content}</p>
							<p id="date">{moment(single.date).format('DD [/] MM [/] Y')}</p>
						</div>
					))}
			</div>
		);
	}
}

export default index;
