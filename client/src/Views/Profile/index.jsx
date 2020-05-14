import React, { Component } from 'react';
import './style.scss';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log('this is the profile', this.props);
		return (
			<div className="Profile">
				{this.props.user && (
					<>
						<div className="Profile__Left">
							<div>
								<img src={this.props.user.picture} alt="image" />
							</div>
							<div className="Profile__Left__Text">
								<div>
									<h5>Nome:</h5>
									<p> {this.props.user.name} </p>
								</div>
								<div>
									<h5>Ano Lectivo:</h5>
									<p> {this.props.user.year} </p>
								</div>
								<div>
									<h5>Email:</h5>
									<p> {this.props.user.email} </p>
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
