import React from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function index(props) {
	return (
		<Form className="Insert__Student">
			<div className="group">
				<FormGroup>
					<Label for="exampleEmail">Email</Label>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Inserir email..."
					/>
				</FormGroup>
				<FormGroup>
					<Label for="examplePassword">Password</Label>
					<Input
						type="password"
						name="password"
						id="examplePassword"
						placeholder="password placeholder"
					/>
				</FormGroup>
			</div>
			<div className="group">
				<FormGroup>
					<Label for="exampleEmail">Name</Label>
					<Input
						type="text"
						name="email"
						id="exampleEmail"
						placeholder="Inserir nome..."
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleEmail">Ano Lectivo</Label>
					<Input
						type="number"
						name="email"
						id="exampleEmail"
						placeholder="Inserir ano..."
					/>
				</FormGroup>
			</div>
			<Button onClick={props.newStudentTab}>Guardar</Button>
		</Form>
	);
}

export default index;
