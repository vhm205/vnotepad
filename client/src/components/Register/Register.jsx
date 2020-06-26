import React, { useState } from 'react';
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Link,
	Grid,
	Box,
	Typography,
	Container,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

import { Copyright, useStylesForSignUp } from '../Styles';
import { api } from '../Service/Service';
import { NavLink, useHistory } from 'react-router-dom';
import registerValid from '../Validation/RegisterValid';

const Register = () => {
	const classes = useStylesForSignUp();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPass] = useState('');
	const [repass, setRepass] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const history = useHistory();

	const onSignUp = async (e) => {
		e.preventDefault();

		try {
			const valid = await registerValid.validateAsync({
				username,
				email,
				password,
				repass,
			});
			await api.post('/register', valid);

			setSuccess('Sign up successfully');
			setError('');
			setTimeout(() => {
				history.push('/login');
			}, 2000);
		} catch (error) {
			if (error.response) {
				setError(error.response.data.msg);
			} else {
				setError(
					error.message === '"repass" must be [ref:password]'
						? 'Password is not matched'
						: error.message
				);
			}
			setSuccess('');
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<form className={classes.form}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Your name"
						autoFocus
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Password"
						type="password"
						value={password}
						onChange={(e) => setPass(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Re-password"
						type="password"
						value={repass}
						onChange={(e) => setRepass(e.target.value)}
					/>
					{error && <Alert severity="error">{error}</Alert>}
					{success && <Alert severity="success">{success}</Alert>}
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={onSignUp}
					>
						Sign Up
					</Button>
					<Grid container>
						<Grid item>
							<NavLink to="/login">{'Have an account? Sign In'}</NavLink>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright Typography={Typography} Link={Link} />
			</Box>
		</Container>
	);
};

export default Register;
