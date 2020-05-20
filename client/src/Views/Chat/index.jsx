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
import { StudentsList } from '../../Services/otherServices';
//Services
import { Link } from 'react-router-dom';
import { sendMessage, getMessages } from '../../Services/otherServices';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentDidMount() {
		console.log('this is props', this.props);
		let listOfPeople = await StudentsList();
		listOfPeople = listOfPeople.filter((single) => {
			return single._id !== this.props.user._id;
		});
		console.log('list of people', listOfPeople);
		this.setState({ listOfPeople });
		setInterval(() => {
			this.messagesUpdated();
		}, 500000);
	}

	handleInputChange = async (event) => {
		const value = event.target.value;
		const inputName = event.target.name;
		await this.setState({
			[inputName]: value,
		});
		console.log(this.state);
	};

	messagesUpdated = async () => {
		let updatedList = await getMessages();
		let otherId = this.props.match.params.id;
		let myId = this.props.user._id;
		console.log('this state', otherId, myId);
		let selectedConversation;
		if (updatedList !== this.state.updatedList) {
			selectedConversation = updatedList.filter((single) => {
				return single.users.includes(otherId) && single.users.includes(otherId);
			});
			console.log('updatedList', selectedConversation);
			this.setState({
				updatedList,
				selectedConversation,
			});
		}
	};

	sendMessage = async (event) => {
		event.preventDefault();
		let otherId = this.props.match.params.id;
		let myId = this.props.user._id;
		let name = this.props.user.name;
		let content = this.state.message;
		if (otherId !== undefined) {
			let message = sendMessage({ content, myId, otherId, name });
			this.setState({
				message: '',
			});
		}
	};

	render() {
		return (
			<div className="Chat">
				<div className="List__of__People">
					<Input placeholder="This will be to search person" />
					{this.state.listOfPeople &&
						this.state.listOfPeople.map((single) => (
							<Link to={'/dashboard/chat/' + single._id}>
								<div className="Person__Avatar">
									<img src={Avatar} alt="avatar" />
									<h5>{single.name}</h5>
								</div>
							</Link>
						))}
				</div>
				<div className="Direct__Messages">
					<div className="Text__Exchange__Field">
						{this.state.selectedConversation &&
							this.state.selectedConversation[0].content.map((single) => (
								<>
									{(single.name == this.props.user.name && (
										<div
											className="Text__Block"
											style={{ flexDirection: 'row-reverse' }}
										>
											<img src={Avatar} />
											<p className="Message">{single.message}</p>
										</div>
									)) || (
										<div className="Text__Block">
											<img src={Avatar} />
											<p className="Message">{single.message}</p>
										</div>
									)}
								</>
							))}
					</div>
					<div className="Text__Input__Field">
						<Form onSubmit={this.sendMessage}>
							<Input
								type="text"
								value={this.state.message}
								name="message"
								id="exampleText"
								onChange={this.handleInputChange}
							/>
							<Button type="submit">Enviar</Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
