import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const Copyright = ({ Typography, Link }) => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link
				color="inherit"
				href="http://vhmblog102.000webhostapp.com"
				target="_blank"
			>
				VHM Blog
			</Link>
			{' ' + new Date().getFullYear() + '.'}
		</Typography>
	);
};

export const useStylesForProfile = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2),
	},
	card: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
}));

export const useStylesForSignUp = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const useCustom = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	fab: {
		width: 300,
		outline: 'none !important',
	},
	btn: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
	input: {
		width: 300,
	},
	mr: {
		marginRight: theme.spacing(1),
	},
	ml: {
		marginLeft: theme.spacing(1),
	},
	mt: {
		marginTop: theme.spacing(1),
	},
	mb: {
		marginBottom: theme.spacing(1),
	},
}));
