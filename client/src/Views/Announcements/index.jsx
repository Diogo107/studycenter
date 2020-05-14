import React, { Component } from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//Services
import { newAnnouncement } from './../../Services/otherServices';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	handleInputChange(event) {
		const value = event.target.value;
		const inputName = event.target.name;
		console.log(this.state);
		this.setState({
			[inputName]: value,
		});
	}

	async sendMessage(event) {
		event.preventDefault();
		let { title, text } = this.state;
		await newAnnouncement({ title, text });
		this.props.history.push('/dashboard/overview');
	}

	render() {
		return (
			<div id="form-main">
				<div id="form-div">
					<form className="form" id="form1" onSubmit={this.sendMessage}>
						<p className="email">
							<input
								name="title"
								type="text"
								className=" feedback-input"
								id="email"
								placeholder="Título"
								onChange={this.handleInputChange}
							/>
						</p>

						<p className="text">
							<textarea
								name="text"
								className="validate[required,length[6,300]] feedback-input"
								id="comment"
								placeholder="Comunicado"
								onChange={this.handleInputChange}
							></textarea>
						</p>

						<div className="submit">
							<input type="submit" value="Guardar" id="button-blue" />
							<div className="ease"></div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default index;
