import React, { Component } from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//Components
import Evaluation from '../../Components/Evaluation';
import NewTest from '../../Components/NewTest';
import TestsList from '../../Components/TestsList';
import Announcements from '../../Components/Announcements';
//Images
import Avatar from './../../asset/images/avatar.png';

class index extends Component {
	render() {
		return (
			<div className="Chat">
				<div className="List__of__People">
					<div className="Person__Avatar">
						<img src={Avatar} alt="avatar" />
						<h5>Lorem Name</h5>
					</div>
					<div className="Person__Avatar">
						<img src={Avatar} alt="avatar" />
						<h5>Lorem Name</h5>
					</div>
					<div className="Person__Avatar">
						<img src={Avatar} alt="avatar" />
						<h5>Lorem Name</h5>
					</div>
					<div className="Person__Avatar">
						<img src={Avatar} alt="avatar" />
						<h5>Lorem Name</h5>
					</div>
					<div className="Person__Avatar">
						<img src={Avatar} alt="avatar" />
						<h5>Lorem Name</h5>
					</div>
				</div>
				<div className="Direct__Messages">
					<div className="Text__Exchange__Field">
						<div className="Text__Block">
							<img src={Avatar} />
							<p className="Message">
								This is a sample of text that I had here to display.
							</p>
						</div>
					</div>
					<div className="Text__Input__Field">
						<Form>
							<Input type="textarea" name="text" id="exampleText" />
							<Button>Enviar</Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
