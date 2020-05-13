import React from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function index(props) {
	return (
		<div className="NewTest__Component">
			<h4>Registar Teste</h4>
			<Form onSubmit={props.newTest}>
				<FormGroup>
					<Label>Disciplina</Label>
					<Input name="subject" onChange={props.handleInputChange} />
				</FormGroup>
				<FormGroup>
					<Label>Data</Label>
					<Input type="date" name="date" onChange={props.handleInputChange} />
				</FormGroup>
				<Button>Guardar</Button>
			</Form>
		</div>
	);
}

export default index;
