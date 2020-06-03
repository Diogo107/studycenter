import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Label, Input } from 'reactstrap';
//Components
import TestsList from '../../Components/TestsList';
//Services
import { getTests } from './../../Services/otherServices.js';
import moment from 'moment';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredList: [],
			name: '',
			year: '',
			behaviour: '',
			achievement: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.filterList = this.filterList.bind(this);
	}

	async componentDidMount() {
		let list = await getTests();
		console.log(moment(list[0].date).format('DD [/] MM [/] Y'));
		console.log(moment(Date()).format('DD [/] MM [/] Y'));
		console.log(moment(list[0].date).format());
		list = list.filter((single) => {
			if (moment(single.date).format() > moment(Date()).format()) {
				return single;
			}
		});
		this.setState({
			list: list,
			filteredList: list,
		});
	}

	async handleInputChange(event) {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
	}

	async filterList() {
		console.log('hellllllllo', this.state);
		let filteredList = await this.state.list.filter((single) => {
			return single.name.includes(this.state.name);
		});

		/* filteredList = await filteredList.filter((single) => {
			return single.year == this.state.year;
		}); */

		this.setState({ filteredList });
	}

	render() {
		return (
			<div className="Tests__List">
				<div className="head">
					<h3>Lista de Testes</h3>
				</div>
				<Table hover>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Disciplina</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{/* <tr>
							<th scope="row">
								{' '}
								<Input
									name="name"
									placeholder="Filtrar Nome..."
									onChange={this.handleInputChange}
								/>
							</th>
							<td>
								{' '}
								<Input
									name="year"
									onChange={this.handleInputChange}
									placeholder="Filtrar Disciplina..."
								/>
							</td>
							<td>
								{' '}
								<Input
									name="behaviour"
									onChange={this.handleInputChange}
									placeholder="Filtrar Data..."
								/>
							</td>
						</tr> */}
						{this.state.filteredList &&
							this.state.filteredList.map((single) => (
								<tr>
									{console.log('this is single')}
									<th scope="row">{single.name}</th>
									<td>{single.subject}</td>
									<td>{moment(single.date).format('DD [/] MM [/] Y')}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default index;
