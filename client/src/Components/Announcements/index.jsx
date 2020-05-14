import React from 'react';
import './style.scss';
import { Table } from 'reactstrap';
//Services
import moment from 'moment';

function index(props) {
	console.log('working on props', props);
	return (
		<div className="NewTest__Component">
			<h4>Comunicados</h4>
			{props.announcements &&
				props.announcements.map((single) => (
					<div className="Single__Annoucement">
						<h5>{single.title}</h5>
						<p>{single.text}</p>
						<p id="date">{moment(single.date).format('DD [/] MM [/] Y')}</p>
					</div>
				))}
		</div>
	);
}

export default index;
