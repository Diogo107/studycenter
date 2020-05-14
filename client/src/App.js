import React, { Component } from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import NavUser from './Components/NavUser';
import SignIn from './Views/Auth/SignIn';
import SignUp from './Views/Auth/SignUp';
import Main from './Views/Main';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { loadUserInformation } from './Services/authentication';
import { updateProfile, updateCart } from './Services/otherServices';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			user: null,
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
		});
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					{(this.state.user && (
						<Route
							path="*"
							render={(props) => <NavUser user={this.state.user} {...props} />}
						/>
					)) || (
						<Route
							path="*"
							render={(props) => <NavBar user={this.state.user} {...props} />}
						/>
					)}
					<Route
						path="/signin"
						render={(props) => (
							<SignIn
								user={this.state.user}
								updateUserInformation={this.updateUserInformation}
								{...props}
							/>
						)}
					/>
					{this.state.user && (
						<>
							<div className="sidebar">
								<Route
									path="/dashboard/"
									render={(props) => (
										<Sidebar
											user={this.state.user}
											updateUserInformation={this.updateUserInformation}
											{...props}
										/>
									)}
								/>
							</div>
							<div className="main">
								<Route
									path="/dashboard/"
									render={(props) => (
										<Main
											user={this.state.user}
											updateUserInformation={this.updateUserInformation}
											{...props}
										/>
									)}
								/>
							</div>
						</>
					)}
					<div>
						<Route
							path="*"
							render={(props) => <Footer user={this.state.user} {...props} />}
						/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
