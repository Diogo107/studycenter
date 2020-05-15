import React, { Component } from 'react';
import './style.scss';
import { getMaterial } from '../../Services/otherServices';

class index extends Component {
	state = {};
	async componentDidMount() {
		let list = await getMaterial();
	}

	render() {
		return <div>Sumary</div>;
	}
}

export default index;
