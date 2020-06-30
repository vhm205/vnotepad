import React, { useState, useEffect } from 'react';
import { Alert } from '@material-ui/lab';
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
import {
	httpGetProfile,
	httpUpdateProfile,
	httpResetPassword,
	httpRefreshToken,
} from '../../service/Service';
import Avatar from 'avataaars';
import { useCookies } from 'react-cookie';
import { useStylesForProfile, useCustom } from '../../style/CommonStyles';

const Profile = () => {
	const classes = useStylesForProfile();
	const custom = useCustom();
	const [info, setInfo] = useState({});
	const [notify, setNotify] = useState({ type: '', message: '' });
	const [isUpdate, setIsUpdate] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies();

	useEffect(() => {
		(async () => {
			if (cookies.token) {
				try {
					const response = await httpGetProfile(cookies.token);
					setInfo(response.data.user);
				} catch (error) {
					httpRefreshToken(cookies.refreshToken)
						.then((response) => {
							setCookie('token', response.data.token);
						})
						.catch((err) => {
							setNotify({ type: 'error', message: err.message });
							removeCookie('token');
							removeCookie('refreshToken');
						});
				}
			}
		})();
	}, [cookies.token, cookies.refreshToken]);

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

	const handleCloseNotify = (_, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setNotify({ type: '', message: '' });
	};

	return (
		<>
			{Object.keys(info).length > 0 ? (
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
							label="Your ID"
							defaultValue={info._id}
							InputLabelProps={{ shrink: true }}
							fullWidth
							disabled
						/>
						<TextField
							className="mb-3"
							label="Email"
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
				</Paper>
			) : (
				<div>Nothing...</div>
			)}
			<Snackbar
				open={notify.message ? true : false}
				autoHideDuration={3000}
				onClose={handleCloseNotify}
			>
				<Alert severity={notify.type && 'info'}>{notify.message}</Alert>
			</Snackbar>
		</>
	);
};

export default Profile;
