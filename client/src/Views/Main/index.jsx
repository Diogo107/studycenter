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
import Sumary from '../Sumary';
import Questions from '../Questions';
import SingleStudent from '../SingleStudent';
import EditContent from '../EditContent';
import Articles from '../Articles';
import DailyChallenge from '../DailyChallenge';
//Routes
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

class index extends Component {
	render() {
		return (
			<div className="Main Margin__Top__For__Navbar">
				<Route
					path="/dashboard/sumary/:id"
					render={(props) => <Sumary {...props} />}
				/>
				<Route
					path="/dashboard/questions/:id"
					render={(props) => <Questions {...props} />}
				/>
				<Route
					path="/dashboard/student/:id"
					render={(props) => <SingleStudent {...props} />}
				/>
				<Route
					path="/dashboard/edirContent/:id"
					render={(props) => <EditContent {...props} />}
				/>
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
				<Route
					path="/dashboard/daily-challenge"
					render={(props) => <DailyChallenge {...props} />}
				/>
				<Route
					path="/dashboard/articles"
					render={(props) => <Articles {...props} />}
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
