import React, { useState, useEffect, useCallback } from 'react';
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
} from '@material-ui/core';

import { useStylesForProfile } from '../Styles';
import { httpGetProfile } from '../Service/Service';

const Profile = () => {
	const classes = useStylesForProfile();
	const [info, setInfo] = useState({});
	const [cookies, setCookie] = useCookies();

	const getProfile = useCallback(async () => {
		const token = cookies.token;
		if (!token) return;

		try {
			const response = await httpGetProfile(token);
			setInfo(response.data.user);
		} catch (error) {
			console.error(error);
		}
	}, [cookies.token]);

	useEffect(() => {
		getProfile();
	}, []);

	return (
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
						<Button size="large" color="secondary" className="btn-block">
							Share
						</Button>
					</CardActions>
				</Card>
			</Typography>
			{Object.keys(info).length > 0 ? (
				<Typography component="form" className="col-6">
					<h3>Infomation</h3>
					<TextField
						className="mb-3"
						name="name"
						label="Name"
						autoComplete="off"
						defaultValue={info.username}
						InputLabelProps={{ shrink: true }}
						fullWidth
					/>

					<TextField
						className="mb-3"
						name="email"
						label="Email"
						autoComplete="off"
						defaultValue={info.email}
						InputLabelProps={{ shrink: true }}
						fullWidth
					/>
					<TextField
						type="password"
						className="mb-3"
						name="password"
						label="Password"
						autoComplete="off"
						// defaultValue={info.password}
						InputLabelProps={{ shrink: true }}
						fullWidth
					/>
					<Button variant="contained" color="primary" className="float-right">
						{' '}
						Save your profile{' '}
					</Button>
				</Typography>
			) : null}
		</Paper>
	);
};

export default Profile;
