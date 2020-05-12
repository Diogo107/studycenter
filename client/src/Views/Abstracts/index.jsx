import React, { Component } from 'react';
import './style.scss';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';

class index extends Component {
	render() {
		return (
			<div className="Dashboard">
				<div className="left">
					<div className="white evaluation">
						<Evaluation />
					</div>
					<div className="white insert__test">
						<NewTest />
					</div>
					<div className="white upcoming__tests">
						<TestsList />
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
