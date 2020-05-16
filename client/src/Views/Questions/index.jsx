import React, { Component } from 'react';
import './style.scss';
import { getMaterial } from '../../Services/otherServices';

class index extends Component {
	state = {};
	async componentDidMount() {
		let list = await getMaterial();
		const id = this.props.match.params.id;
		const showing = list.filter((single) => single._id == id);
		console.log('this is the single', showing);
		this.setState({ showing });
	}

	render() {
		return (
			<div className="Summary__View">
				{this.state.showing &&
					this.state.showing.map((single) => (
						<>
							<h1>{single.Theme}</h1>
							<h6>{single.Subject}</h6>
							<p> {single.Questions} </p>
						</>
					))}
			</div>
		);
	}
}

export default index;
