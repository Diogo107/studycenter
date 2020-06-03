import React, { Component } from 'react';
import './style.scss';
import { Table } from 'reactstrap';
//Services
import { getTests } from '../../Services/otherServices';
import moment from 'moment';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentDidMount() {
		let list = await getTests();
		list = list.filter((single) => single.userId == this.props.user._id);
		this.setState({
			list: list.filter((single) => {
				if (moment(single.date).format() > moment(Date()).format()) {
					return single;
				}
			}),
		});
	}

	render() {
		return (
			<div className="NewTest__Component">
				<h4>Próximos Testes</h4>
				<Table hover responsive>
					<thead>
						<tr>
							<th>#</th>
							<th>Disciplina</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{this.state.list &&
							this.state.list.map((single) => (
								<tr>
									<th scope="row">1</th>
									<td>{single.subject}</td>
									<td>{moment(single.date).format('DD [/] MM [/] Y')}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default index;
