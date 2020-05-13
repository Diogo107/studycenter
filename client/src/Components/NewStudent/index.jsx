import React from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
						onChange={props.handleInputChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="examplePassword">Password</Label>
					<Input
						type="password"
						name="passwordHash"
						id="examplePassword"
						placeholder="password placeholder"
						onChange={props.handleInputChange}
					/>
				</FormGroup>
			</div>
			<div className="group">
				<FormGroup>
					<Label for="exampleEmail">Name</Label>
					<Input
						type="text"
						name="name"
						id="exampleEmail"
						placeholder="Inserir nome..."
						onChange={props.handleInputChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleEmail">Ano Lectivo</Label>
					<Input
						type="number"
						name="year"
						id="exampleEmail"
						placeholder="Inserir ano..."
						onChange={props.handleInputChange}
					/>
				</FormGroup>
			</div>
			<Button onClick={props.sendMessage}>Guardar</Button>
		</Form>
	);
}

export default index;
