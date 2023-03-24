import React, { useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [waiting, setWaiting] = useState(false);
	const navigate = useNavigate();
	const verbose = true;

	async function submitHandler(e) {
		e.preventDefault();
		setWaiting(true);

		try {
			if (email === 'office@ipgs.ca' && password === 'password')
				navigate('/dispatch');
		} catch (err) {
			setError(verbose ? err.message : 'Failed created the account');
		}
		setWaiting(false);
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h3 className='text-center mb-2'>Sign In</h3>
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={submitHandler}>
						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							></Form.Control>
						</Form.Group>
						<Form.Group id='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							></Form.Control>
						</Form.Group>
						<Button type='submit' className='w-100 mt-2' disabled={waiting}>
							Sign In
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Don't have an account yet ? <Link to='/signup'>Sign Up</Link> instead.
			</div>
		</>
	);
}
