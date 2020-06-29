import React, { useState } from 'react';
import { Paper, TextField, Typography, Fab } from '@material-ui/core';
import { Restore } from '@material-ui/icons';
import { useCustom } from '../../../style/CommonStyles';
import { httpUpdatePassword } from '../../../service/Service';

const ResetPassword = ({ ...rest }) => {
	const custom = useCustom();
	const [password, setPassword] = useState('');
	const [repass, setRepass] = useState('');

	const onResetPassword = async () => {
		try {
			const token = rest.location.search.split('=')[1];
			const response = await httpUpdatePassword(token, { password, repass });
			console.log(response);
		} catch (error) {
			console.error(error, error.response);
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
				className={`${custom.mt} ${custom.fab}`}
				onClick={onResetPassword}
			>
				<Restore className={custom.mr} />
				Reset Password
			</Fab>
		</Paper>
	);
};

export default ResetPassword;
