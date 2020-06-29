import React, { useState, useEffect } from 'react';
import Avatar from 'avataaars';
import { useCookies } from 'react-cookie';
import {
	Paper,
	Typography,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Button,
	TextField,
	Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import {
	httpGetProfile,
	httpUpdateProfile,
	httpResetPassword,
	httpRefreshToken,
} from '../../service/Service';
import { useStylesForProfile, useCustom } from '../../style/CommonStyles';

const Profile = () => {
	const classes = useStylesForProfile();
	const custom = useCustom();
	const [info, setInfo] = useState({});
	const [notify, setNotify] = useState({ type: '', message: '' });
	const [isUpdate, setIsUpdate] = useState(false);
	const [cookies, setCookie] = useCookies();

	useEffect(() => {
		(async () => {
			if (cookies.token) {
				try {
					const response = await httpGetProfile(cookies.token);
					setInfo(response.data.user);
				} catch (error) {
					console.error(error.response);
					const response = await httpRefreshToken(cookies.refreshToken);
					setCookie('token', response.data.token);
				}
			}
		})();
	}, [cookies.token]);

	const updateProfile = async () => {
		try {
			const response = await httpUpdateProfile(cookies.token, {
				username: info.username,
			});
			setNotify({ type: 'success', message: response.data.msg });
		} catch (error) {
			console.error(error, error.response);
		} finally {
			setIsUpdate(false);
		}
	};

	const resetPassword = async () => {
		try {
			const response = await httpResetPassword(cookies.token);
			setNotify({ type: 'success', message: response.data.msg });
		} catch (error) {
			console.error(error, error.response);
		}
	};

	const handleCloseNotify = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setNotify({ type: '', message: '' });
	};

	return Object.keys(info).length > 0 ? (
		<Paper className={classes.root + ' d-flex'}>
			<Typography variant="h5" component="h3" className="col-4">
				<Card className={classes.card}>
					<CardActionArea className="text-center">
						<Avatar
							style={{ width: '100px', height: '100px' }}
							avatarStyle="Circle"
							topType="WinterHat1"
							accessoriesType="Blank"
							hatColor="Red"
							hairColor="BrownDark"
							facialHairType="Blank"
							clotheType="BlazerShirt"
							eyeType="Default"
							eyebrowType="Default"
							mouthType="Default"
							skinColor="Light"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{info.username}
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
								className="mb-2"
							>
								{info.email}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Your ID: {info._id}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className="text-center">
						<Button
							size="large"
							color="secondary"
							className="btn-block"
							onClick={updateProfile}
							disabled={!isUpdate}
						>
							Save your profile
						</Button>
					</CardActions>
				</Card>
			</Typography>
			<Typography component="form" className="col-6">
				<h3>Infomation</h3>
				<TextField
					className="mb-3"
					name="email"
					label="Email"
					autoComplete="off"
					defaultValue={info.email}
					InputLabelProps={{ shrink: true }}
					fullWidth
					disabled
				/>
				<TextField
					className="mb-3"
					name="name"
					label="Name"
					autoComplete="off"
					defaultValue={info.username}
					InputLabelProps={{ shrink: true }}
					onChange={(e) => {
						setInfo((value) => ({ ...value, username: e.target.value }));
						if (!isUpdate) setIsUpdate(true);
					}}
					fullWidth
				/>
				<Button
					variant="contained"
					className={`${custom.btn} float-left`}
					onClick={resetPassword}
				>
					Reset Password
				</Button>
			</Typography>
			<Snackbar
				open={notify.message ? true : false}
				autoHideDuration={3000}
				onClose={handleCloseNotify}
			>
				{notify.type === 'error' ? (
					<Alert severity="error">{notify.message}</Alert>
				) : (
					<Alert severity="success">{notify.message}</Alert>
				)}
			</Snackbar>
		</Paper>
	) : (
		<div>Nothing...</div>
	);
};

export default Profile;
