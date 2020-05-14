import React, { Component } from 'react';
import './style.scss';
import { Input, Button } from 'reactstrap';
//Images
import Edit from './../../asset/images/editar.png';
import Id from './../../asset/images/contactos/id.png';
import Mail from './../../asset/images/contactos/mail.png';
import Academic from './../../asset/images/contactos/academic.png';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: true,
		};
	}
	componentDidMount() {
		let { name, picture, year, email } = this.props.user;
		console.log('getting from props', { name, picture, year, email });
		this.setState({ name, picture, year, email });
	}

	render() {
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
