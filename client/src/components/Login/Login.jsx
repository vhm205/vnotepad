import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	Link,
	Box,
	Typography,
	Container,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { Copyright, useStylesForSignUp } from '../../style/CommonStyles';
import { api } from '../../service/Service';
import loginValid from '../../validation/LoginValid';

const Login = () => {
	const classes = useStylesForSignUp();
	const [email, setEmail] = useState('');
	const [password, setPass] = useState('');
	const [remember, setRemember] = useState(false);
	const [error, setError] = useState('');
	const [, setCookie] = useCookies();

	useEffect(() => {
		const rememberMe = JSON.parse(window.localStorage.getItem('remember'));
		if (rememberMe) {
			setEmail(rememberMe.email);
			setPass(rememberMe.password);
			setRemember(true);
		}
	}, []);

	const onSignIn = async () => {
		try {
			const valid = await loginValid.validateAsync({ email, password });
			const response = await api.post('/login', valid);
			const { msg, token, refreshToken } = response.data;

			if (remember) {
				window.localStorage.setItem(
					'remember',
					JSON.stringify({ email: email, password: password })
				);
			} else {
				localStorage.removeItem('remember');
			}

			Swal.fire({
				icon: 'success',
				title: msg,
				showConfirmButton: false,
				timer: 1500,
				allowOutsideClick: false,
				backdrop: 'rgba(85,85,85, .4)',
				timerProgressBar: true,
			}).then(() => {
				setCookie('token', token);
				setCookie('refreshToken', refreshToken);
			});
		} catch (error) {
			console.error(error);
			if (error.response) {
				setError(error.response.data.msg);
			} else {
				setError(error.message);
			}
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
					Sign In
				</Typography>
				<form className={classes.form}>
					<TextField
						autoFocus
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Email Address"
						name="email"
						autoComplete="email"
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
						id="password"
						value={password}
						onChange={(e) => setPass(e.target.value)}
					/>
					<FormControlLabel
						control={
							<Checkbox
								color="primary"
								value={remember}
								checked={remember}
								onChange={(e) => setRemember(!remember)}
							/>
						}
						label="Remember me"
					/>
					{error && <Alert severity="error">{error}</Alert>}
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={onSignIn}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item>
							<NavLink to="/register">
								{"You don't have an account? Sign Up"}
							</NavLink>
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

export default Login;
