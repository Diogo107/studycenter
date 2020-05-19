import React, { Component } from 'react';
import './style.scss';
import { Table, InputGroup, Label, Input } from 'reactstrap';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';
import NewStudent from '../../Components/NewStudent';
//Services
import { Link } from 'react-router-dom';
import { signUp } from '../../Services/authentication';
import { StudentsList } from './../../Services/otherServices';
//Images
import Edit from '../../asset/images/editar.png';
import AddUserActive from '../../asset/images/AddUserActive.png';
import AddUserInactive from '../../asset/images/AddUserInactive.png';
import AllUsersActive from '../../asset/images/AllUsersActive.png';
import AllUsersInactive from '../../asset/images/AllUsersInactive.png';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addStudent: false,
			filteredList: [],
			name: '',
			year: '',
			behaviour: '',
			achievement: '',
			seeAll: false,
		};
		this.newStudentTab = this.newStudentTab.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.filterList = this.filterList.bind(this);
	}

	async componentDidMount() {
		let list = await StudentsList();
		this.setState({
			list: list,
			filteredList: list,
		});
	}

	newStudentTab() {
		this.setState({
			addStudent: !this.state.addStudent,
		});
	}

	async handleInputChange(event) {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
		this.filterList();
	}

	async sendMessage(event) {
		event.preventDefault();
		let { email, name, year, passwordHash } = this.state;
		await signUp({ email, name, year, passwordHash });
		this.newStudentTab();
		this.componentDidMount();
	}

	async filterList() {
		console.log('hellllllllo', this.state);
		let filteredList = await this.state.list.filter((single) => {
			if (
				single.name.toLowerCase().includes(this.state.name.toLowerCase()) &&
				single.year.toString().includes(this.state.year.toString()) &&
				single.behaviour.toString().includes(this.state.behaviour.toString()) &&
				single.achievement
					.toString()
					.includes(this.state.achievement.toString())
			) {
				return true;
			}
		});
		this.setState({ filteredList });
	}

	render() {
		return (
			<div className="Students__List">
				<div className="head">
					<button
						onClick={() => {
							this.setState({ seeAll: !this.state.seeAll });
						}}
					>
						{(this.state.seeAll && (
							<img
								src={AllUsersActive}
								alt="Adicionar novo aluno"
								style={{ width: '50px', height: '50px' }}
							/>
						)) || (
							<img
								src={AllUsersInactive}
								alt="Adicionar novo aluno"
								style={{ width: '50px', height: '50px' }}
							/>
						)}
					</button>
					<button onClick={this.newStudentTab}>
						{(this.state.addStudent && (
							<img
								src={AddUserActive}
								alt="Adicionar novo aluno"
								style={{ width: '50px', height: '50px' }}
							/>
						)) || (
							<img
								src={AddUserInactive}
								alt="Adicionar novo aluno"
								style={{ width: '50px', height: '50px' }}
							/>
						)}
					</button>
				</div>
				{this.state.addStudent && (
					<NewStudent
						sendMessage={this.sendMessage}
						handleInputChange={this.handleInputChange}
						{...this.props}
					/>
				)}
				<Table hover>
					<thead>
						<tr>
							{this.state.seeAll && <th style={{ width: '25px' }}>Estado</th>}
							<th>Nome</th>
							<th>Ano</th>
							<th className="Table__hide">Comportamento</th>
							<th className="Table__hide">Aproveitamento</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{this.state.seeAll && <th style={{ width: '25px' }}></th>}
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
									placeholder="Filtrar Ano..."
								/>
							</td>
							<td className="Table__hide">
								{' '}
								<Input
									name="behaviour"
									onChange={this.handleInputChange}
									placeholder="Filtrar Comportamento..."
								/>
							</td>
							<td className="Table__hide">
								{' '}
								<Input
									name="achievement"
									onChange={this.handleInputChange}
									placeholder="Filtrar Aproveitamento..."
								/>
							</td>
						</tr>
						{this.state.filteredList &&
							this.state.filteredList.map((single) => (
								<tr>
									{(this.state.seeAll && single.active && (
										<th>
											<div className="Green__Ball" alt="Activo"></div>
										</th>
									)) ||
										(this.state.seeAll && (
											<th>
												<div className="Red__Ball" alt="Activo"></div>
											</th>
										))}
									<th>{single.name}</th>
									<td>{single.year}º</td>
									<td className="Table__hide">{single.behaviour}</td>
									<td className="Table__hide">{single.achievement}</td>
									<td>
										<Link to={'/dashboard/student/' + single._id}>
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
