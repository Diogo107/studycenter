import React, { Component } from 'react';
import './style.scss';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';
//Services
import { newTest, getAnnouncement } from '../../Services/otherServices';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.newTest = this.newTest.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	async componentDidMount() {
		let announcements = await getAnnouncement();
	}

	handleInputChange(event) {
		const value = event.target.value;
		const inputName = event.target.name;
		console.log(this.state);
		this.setState({
			[inputName]: value,
		});
	}

	async newTest(event) {
		event.preventDefault();
		let name = this.props.user.name;
		let userId = this.props.user._id;
		let { subject, date } = this.state;
		console.log('information', { subject, date, name, userId });
		await newTest({ subject, date, name, userId });
		window.location.reload(true);
	}

	render() {
		return (
			<div className="Dashboard">
				<div className="left">
					<div className="white evaluation">
						<Evaluation user={this.props.user} {...this.props} />
					</div>
					<div className="white insert__test">
						<NewTest
							newTest={this.newTest}
							handleInputChange={this.handleInputChange}
						/>
					</div>
					<div className="white upcoming__tests">
						<TestsList user={this.props.user} />
					</div>
				</div>
				<div className="white announcements">
					<Announcements />
				</div>
			</div>
		);
	}
}

export default index;
