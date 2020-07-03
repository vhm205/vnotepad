import React, { useState } from 'react';
import { Paper, TextField, Typography, Fab } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Restore } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useCustom } from '../../../style/CommonStyles';
import UserAPI from '../../../service/userApi';
import resetPassValid from '../../../validation/ResetPassValid';
import Swal from 'sweetalert2';

const ResetPassword = ({ ...rest }) => {
	const custom = useCustom();
	const history = useHistory();
	const [password, setPassword] = useState('');
	const [repass, setRepass] = useState('');
	const [error, setError] = useState('');
	const [cookies, , removeCookie] = useCookies();

	const onResetPassword = async () => {
		const token = rest.location.search.split('=')[1];
		if (!token) history.push('/login');

		const userApi = new UserAPI(token);
		try {
			const valid = await resetPassValid.validateAsync({ password, repass });
			const response = await userApi.updatePassword(valid);
			Swal.fire({
				icon: 'success',
				title: response.msg,
				text: 'You need login again!!',
				showConfirmButton: false,
				allowOutsideClick: false,
				backdrop: 'rgba(85,85,85, .4)',
				timerProgressBar: true,
				timer: 3000,
			}).then(() => {
				UserAPI.logoutAll(cookies.refreshToken)
					.then(() => {
						removeCookie('token');
						removeCookie('refreshToken');
					})
					.catch((err) => console.error(err));
			});
		} catch (error) {
			if (error.response) {
				setError(error.response.data.msg);
				return;
			}

			if (error.message === '"repass" must be [ref:password]') {
				setError('Password is not matched');
			} else {
				setError(error.message);
			}
		}
	};

	return (
		<Paper className={custom.paper}>
			<Typography variant="h4" gutterBottom>
				Reset your password
			</Typography>
			<TextField
				type="password"
				label="New Password"
				className={`${custom.mb} ${custom.input}`}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				type="password"
				label="Verify Password"
				className={`${custom.mb} ${custom.input}`}
				onChange={(e) => setRepass(e.target.value)}
			/>
			<Fab
				variant="extended"
				color="primary"
				className={`${custom.mt} ${custom.mb} ${custom.fab}`}
				onClick={onResetPassword}
			>
				<Restore className={custom.mr} />
				Reset Password
			</Fab>
			{error && <Alert severity="error">{error}</Alert>}
		</Paper>
	);
};

export default ResetPassword;
