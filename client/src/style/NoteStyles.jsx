import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	rootNote: {
		padding: theme.spacing(2),
	},
	paper: {
		padding: theme.spacing(3),
	},
	speedial: {
		marginBottom: theme.spacing(3),
	},
	box: {
		padding: theme.spacing(3),
		borderRadius: 10,
	},
	cardActionArea: {
		outline: 'none !important',
	},
	btnProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	btnNote: {
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		border: 1,
		outline: 'none !important',
		height: '100%',
		padding: '0 30px',
	},
	btnWidth: {
		width: 200,
		outline: 'none !important',
	},
	btnDelete: {
		background: '#f50057',
	},
	btnFavorite: {},
}));
