import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Form, Label, Input, Button } from 'reactstrap';
//Images
import pencil from './../../asset/images/pencil.png';
import rubber from './../../asset/images/rubber.png';
//Services
import { updateNotes } from './../../Services/otherServices';
import moment from 'moment';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
		};
		this.addNote = this.addNote.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.erase = this.erase.bind(this);
	}

	async componentDidMount() {
		this.setState({
			notes: this.props.user.notes,
		});
		console.log('annotations', this.state);
	}

	async addNote(event) {
		event.preventDefault();
		let id = Math.round(Math.random() * 1000000000);
		let text = this.state.text;
		let date = Date();
		let note = { id, text, date };
		await this.setState((previousState) => ({
			notes: [note, ...previousState.notes],
			text: '',
		}));
		console.log({ id, text, date });
		let userId = this.props.user._id;
		let notes = this.state.notes;
		await updateNotes({ notes, userId });
	}

	handleInputChange(event) {
		const value = event.target.value;
		const inputName = event.target.name;
		this.setState({
			[inputName]: value,
		});
	}

	async erase(event) {
		event.preventDefault();
		let selected = event.target[0].value;
		console.log(selected);
		let notes = await this.state.notes.filter((single) => {
			console.log(single.id);
			return single.id !== selected;
		});
		this.setState({ notes });
	}

	render() {
		return (
			<div className="Dictionary">
				<h3>Minhas Notas</h3>
				<Form onSubmit={this.addNote}>
					<Input
						type="textarea"
						name="text"
						value={this.state.text}
						id="exampleText"
						placeholder="Adicionar nota..."
						onChange={this.handleInputChange}
					/>
					<button>
						Adicionar nota <img src={pencil} alt="arrow" />
					</button>
				</Form>
				<InputGroup>
					{/* <Label>Pesquisa:</Label> */}
					<Input placeholder="Que nota estamos à procura...?" />
				</InputGroup>
				<section>
					{this.state.notes.map((single) => (
						<div class="post-it">
							<p class="sticky taped">
								<form onSubmit={this.erase}>
									<button value={single.id}>
										<img src={rubber} />
									</button>
									<strong>
										{moment(single.date).format('DD [/] MM [/] Y')}
									</strong>
									<br />
									<br />
									{single.text}
								</form>
							</p>
						</div>
					))}
				</section>
			</div>
		);
	}
}

export default index;
