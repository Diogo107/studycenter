import React, { Component } from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import { loadUserInformation } from './Services/authentication';
import { updateProfile, updateCart } from './Services/otherServices';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

/* Este ainda não usei */

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			user: null,
			cart: [],
			toggleShowB: true,
		};
		this.updateUserInformation = this.updateUserInformation.bind(this);
	}

	async componentDidMount() {
		const user = await loadUserInformation();
		if (user !== null) {
			await this.updateUserInformation(user);
		}
		this.setState({
			loaded: true,
		});
	}

	updateUserInformation(user) {
		this.setState({
			user,
			cart: user.cart,
		});
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Route
						path="*"
						render={(props) => (
							<NavBar
								user={this.state.user}
								cart={this.state.cart}
								{...props}
							/>
						)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
