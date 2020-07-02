import React, { useState, useContext } from 'react';
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
import { httpUpdateProfile, httpResetPassword } from '../../service/Service';
import Avatar from 'avataaars';
import { useCookies } from 'react-cookie';
import { useStylesForProfile, useCustom } from '../../style/CommonStyles';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
	const classes = useStylesForProfile();
	const custom = useCustom();
	const [user, setUser] = useContext(UserContext);
	const [cookies] = useCookies();
	const [isUpdate, setIsUpdate] = useState(false);
	const [info, setInfo] = useState({});
	const [notify, setNotify] = useState({ type: '', message: '' });

	const updateProfile = async () => {
		try {
			const response = await httpUpdateProfile(cookies.token, {
				username: info.username,
			});
			setUser((value) => ({ ...value, username: info.username }));
			setNotify({ type: 'success', message: response.data.msg });
		} catch (error) {
			setNotify({ type: 'error', message: error.message });
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
			{Object.keys(user).length > 0 ? (
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
										{user.username}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										className="mb-2"
									>
										{user.email}
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
							defaultValue={user._id}
							InputLabelProps={{ shrink: true }}
							fullWidth
							disabled
						/>
						<TextField
							className="mb-3"
							label="Email"
							defaultValue={user.email}
							InputLabelProps={{ shrink: true }}
							fullWidth
							disabled
						/>
						<TextField
							fullWidth
							className="mb-3"
							name="name"
							label="Name"
							autoComplete="off"
							defaultValue={user.username}
							InputLabelProps={{ shrink: true }}
							onChange={(e) => {
								setInfo((value) => ({ ...value, username: e.target.value }));
								if (!isUpdate) setIsUpdate(true);
							}}
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
				autoHideDuration={5000}
				onClose={handleCloseNotify}
			>
				<Alert severity={notify.type ? notify.type : 'info'}>
					{notify.message}
				</Alert>
			</Snackbar>
		</>
	);
};

export default Profile;
