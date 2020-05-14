import React, { Component } from 'react';
import './style.scss';
import { Input } from 'reactstrap';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
		};
	}
	componentDidMount() {
		let { name, picture, year, email } = this.props.user;
		console.log('getting from props', { name, picture, year, email });
		this.setState({ name, picture, year, email });
	}

	render() {
		console.log('this is the profile', this.props);
		return (
			<div className="Profile">
				{this.state.name && (
					<>
						<div className="Profile__Left">
							<div>
								<img src={this.props.user.picture} alt="image" />
							</div>
							<div className="Profile__Left__Text">
								<div>
									<h5>Nome:</h5>
									{(this.state.edit && (
										<Input
											value={this.state.name}
											onChange={this.handleInputChange}
											name="name"
										/>
									)) || <p> {this.state.name} </p>}
								</div>
								<div>
									<h5>Ano Lectivo:</h5>
									{(this.state.edit && (
										<Input
											value={this.state.year}
											onChange={this.handleInputChange}
											name="year"
										/>
									)) || <p> {this.state.year} </p>}
								</div>
								<div>
									<h5>Email:</h5>
									{(this.state.edit && (
										<Input
											value={this.state.email}
											onChange={this.handleInputChange}
											name="email"
										/>
									)) || <p> {this.state.email} </p>}
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
