import React, { Component } from 'react';
import './style.scss';
//Components
import Dashboard from '../Dashboard';
import Chat from '../Chat';
import Annotations from '../Annotations';
import Abstracts from '../Abstracts';
import FAQS from '../FAQ';
import InsertContent from '../InsertContent';
import StudentsList from '../StudentsList';
import TestsList from '../TestsList';
import Announcements from '../Announcements';
import Profile from '../Profile';
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
					path="/dashboard/annotations"
					render={(props) => <Annotations user={this.props.user} {...props} />}
				/>
				<Route
					path="/dashboard/subjects"
					render={(props) => <Abstracts {...props} />}
				/>
				<Route path="/dashboard/faqs" render={(props) => <FAQS {...props} />} />
				<Route
					path="/dashboard/insert"
					render={(props) => <InsertContent {...props} />}
				/>
				<Route
					path="/dashboard/students-list"
					render={(props) => <StudentsList {...props} />}
				/>
				<Route
					path="/dashboard/test-list"
					render={(props) => <TestsList {...props} />}
				/>
				<Route
					path="/dashboard/announcements"
					render={(props) => <Announcements {...props} />}
				/>
				<Route
					path="/dashboard/profile"
					render={(props) => <Profile user={this.props.user} {...props} />}
				/>
			</div>
		);
	}
}

export default index;
