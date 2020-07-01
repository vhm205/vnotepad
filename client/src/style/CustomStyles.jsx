import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
	outlineNone: {
		outline: 'none !important',
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
