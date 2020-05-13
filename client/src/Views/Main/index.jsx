import React, { Component } from 'react';
import './style.scss';
//Components
import Dashboard from '../Dashboard';
import Chat from '../Chat';
import Dictionary from '../Dictionary';
import Abstracts from '../Abstracts';
import FAQS from '../FAQ';
import StudentsList from '../StudentsList';
//Routes
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

class index extends Component {
	render() {
		console.log('this is the main', this.props);
		return (
			<div className="Main">
				<Route
					path="/dashboard/overview"
					render={(props) => <Dashboard user={this.props.user} {...props} />}
				/>
				<Route path="/dashboard/chat" render={(props) => <Chat {...props} />} />
				<Route
					path="/dashboard/dictionary"
					render={(props) => <Dictionary {...props} />}
				/>
				<Route
					path="/dashboard/subjects"
					render={(props) => <Abstracts {...props} />}
				/>
				<Route path="/dashboard/faqs" render={(props) => <FAQS {...props} />} />
				<Route
					path="/dashboard/students-list"
					render={(props) => <StudentsList {...props} />}
				/>
			</div>
		);
	}
}

export default index;
