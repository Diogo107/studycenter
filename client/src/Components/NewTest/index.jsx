import React from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function index(props) {
	return (
		<div className="NewTest__Component">
			<h4>Registar Teste</h4>
			<Form>
				<FormGroup>
					<Label>Disciplina</Label>
					<Input />
				</FormGroup>
				<FormGroup>
					<Label>Data</Label>
					<Input type="date" />
				</FormGroup>
				<Button>Guardar</Button>
			</Form>
		</div>
	);
}

export default index;
