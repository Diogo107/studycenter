import React, { Component, useContext } from 'react';
import './style.scss';
import { Form, Input, Button, InputGroup, Label } from 'reactstrap';
import { Toast } from 'react-bootstrap';
//Images
import Edit from './../../asset/images/editar.png';
import Id from './../../asset/images/contactos/id.png';
import Mail from './../../asset/images/contactos/mail.png';
import Academic from './../../asset/images/contactos/academic.png';
import Key from './../../asset/images/padlock.png';
//Services
import Context from '../../Store/context';
import { updatePassword, updatePicture } from '../../Services/otherServices';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			saved: false,
			loading: false,
		};
	}
	componentDidMount() {
		let { name, picture, year, email } = this.props.user;
		this.setState({ name, picture, year, email });
	}

	handleInputFile = async (event) => {
		this.setState({ loading: true });
		let { name, files } = event.target;
		await this.setState({
			[name]: files[0],
		});
		let picture = await updatePicture(this.state.file);
		await this.setState({ picture });
		this.setState({ loading: false });
	};

	handleInputChange = async (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
	};

	changePassword = async (event) => {
		event.preventDefault();
		let passwordHash = this.state.passwordHash;
		let id = this.props.user._id;
		await updatePassword({
			passwordHash,
			id,
		});
		this.setState({ edit: false, saved: true });
		setTimeout(() => {
			this.setState({ saved: false });
		}, 3000);
	};

	render() {
		return (
			<div className="Profile">
				{this.state.name && (
					<>
						<div className="Profile__Left">
							<div>
								{(!this.state.loading && (
									<>
										<img src={this.props.user.picture} alt="image" />
										<Label for="change__pincture">
											<img src={Edit} />
										</Label>
										<Input
											id="change__pincture"
											type="file"
											name="file"
											onChange={this.handleInputFile}
										/>
									</>
								)) || (
									<div className="load-3">
										<div className="line"></div>
										<div className="line"></div>
										<div className="line"></div>
									</div>
								)}
							</div>
							<div className="Profile__Left__Text">
								<div>
									<img src={Id} alt="name" />
									<p> {this.state.name} </p>
								</div>
								<div>
									<img src={Academic} alt="name" />
									<p> {this.state.year}º </p>
								</div>
								<div>
									<img src={Mail} alt="name" />
									<p> {this.state.email} </p>
								</div>
								<div>
									<button
										id="padlock"
										onClick={() => {
											this.setState({ edit: !this.state.edit });
										}}
									>
										<img src={Key} alt="name" />
									</button>
									{(this.state.edit && (
										<Form onSubmit={this.changePassword}>
											<InputGroup>
												<Label>Nova Password</Label>
												<Input
													required
													name="passwordHash"
													onChange={this.handleInputChange}
												/>
												<Button>Alterar</Button>
											</InputGroup>
										</Form>
									)) || <p> ******* </p>}
									{this.state.saved && (
										<>
											<Toast>
												<Toast.Header>
													<img
														src="https://image.flaticon.com/icons/svg/845/845646.svg"
														alt="check"
														style={{
															width: '20px',
															height: '20px',
															marginRight: '20px',
														}}
													/>
													<strong className="mr-auto">Sucesso</strong>
												</Toast.Header>
												<Toast.Body>
													A sua password foi actualizada com sucesso.
												</Toast.Body>
											</Toast>
										</>
									)}
								</div>
							</div>
						</div>
						<div className="Profile__Right">
							<h4>Outras Informações</h4>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default index;
