import { makeStyles } from '@material-ui/core/styles';

export const useNotesStyles = makeStyles((theme) => ({
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
	btnNote: {
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
		border: 1,
		outline: 'none !important',
		height: '100%',
		padding: '0 30px',
	},
	btnDelete: {
		background: '#f50057',
	},
	btnFavorite: {},
}));
