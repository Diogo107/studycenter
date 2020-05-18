import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Label, Input } from 'reactstrap';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';
//Services
import { getMaterial } from '../../Services/otherServices';
import { Link } from 'react-router-dom';
//Images
import Edit from '../../asset/images/editar.png';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			material: '',
		};
	}

	async componentDidMount() {
		const material = await getMaterial();
		console.log('material', material);
		this.setState({
			material,
			filteredMaterial: material,
			Subject: '',
			Theme: '',
		});
	}

	handleInputChange = async (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
		console.log(this.state);
		this.filterList();
	};

	filterList = async () => {
		/* let filteredMaterial = await this.state.material.filter((single) => {
			return single.Subject.includes(this.state.Subject);
		});
		this.setState({ filteredMaterial }); */
		let filter = {
			Subject: this.state.Subject,
			Theme: this.state.Theme,
		};

		let filteredMaterial = this.state.material.filter((single) => {
			if (
				single.Subject.toLowerCase().includes(filter.Subject.toLowerCase()) &&
				single.Theme.toLowerCase().includes(filter.Theme.toLowerCase())
			) {
				return true;
			}
		});
		this.setState({ filteredMaterial });
	};

	render() {
		return (
			<div className="Abstracts">
				<h3>Procurar por:</h3>
				<section>
					<InputGroup>
						<Label>Disciplina</Label>
						<Input name="Subject" onChange={this.handleInputChange} />
					</InputGroup>
					<InputGroup>
						<Label>Tema</Label>
						<Input name="Theme" onChange={this.handleInputChange} />
					</InputGroup>
				</section>
				<Table hover>
					<thead>
						<tr>
							<th>Disciplina</th>
							<th>Tema</th>
							<th>Resumos</th>
							<th>Questões</th>
						</tr>
					</thead>
					<tbody>
						{this.state.filteredMaterial &&
							this.state.filteredMaterial.map((single) => (
								<tr>
									<th scope="row">{single.Subject}</th>
									<td>{single.Theme}</td>
									{single.Sumary && (
										<td>
											<Link to={'/dashboard/sumary/' + single._id}>
												<img src="https://image.flaticon.com/icons/svg/2054/2054196.svg" />
											</Link>
										</td>
									)}
									{(single.Questions && (
										<td>
											<Link to={'/dashboard/questions/' + single._id}>
												<img src="https://image.flaticon.com/icons/png/512/1164/1164713.png" />
											</Link>
										</td>
									)) || <td></td>}
									<td>
										<Link to={'/dashboard/edirContent/' + single._id}>
											<img
												className="scope"
												src={Edit}
												alt="editar"
												style={{ width: '20px', height: '20px' }}
											/>
										</Link>
									</td>
								</tr>
							))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default index;
