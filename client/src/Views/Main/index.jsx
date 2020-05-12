import React, { Component } from 'react';
import './style.scss';
//Components
import Dashboard from '../Dashboard';
import Chat from '../Chat';
import Abstracts from '../Abstracts';
import Dictionary from '../Dictionary';
//Routes
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

class index extends Component {
	render() {
		return (
			<div className="Main">
				<Route
					path="/dashboard/overview"
					render={(props) => <Dashboard {...props} />}
				/>
				<Route path="/dashboard/chat" render={(props) => <Chat {...props} />} />
				<Route
					path="/dashboard/abstracts"
					render={(props) => <Abstracts {...props} />}
				/>
				<Route
					path="/dashboard/dictionary"
					render={(props) => <Dictionary {...props} />}
				/>
			</div>
		);
	}
}

export default index;
