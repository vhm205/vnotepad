import React from 'react';
import {
	Grid,
	Box,
	Typography,
	CardActionArea,
	Button,
} from '@material-ui/core';
import { FavoriteBorder, Delete } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const Note = React.memo(({ styles, action, ...info }) => {
	const history = useHistory();
	const openNote = () => history.push(`/note/${info.url_id}`);

	return (
		<Grid container direction="row" className={styles.rootNote}>
			<Grid item xs>
				<CardActionArea className={styles.cardActionArea} onClick={openNote}>
					<Box boxShadow={5} className={styles.box}>
						<Typography variant="h5" gutterBottom color="textSecondary">
							{info.title}
						</Typography>
						<Typography variant="caption">
							{new Date(info.created).toLocaleDateString()}
						</Typography>
					</Box>
				</CardActionArea>
			</Grid>
			{action === 'favorite' && (
				<Grid item>
					<Button variant="contained" className={styles.btnNote}>
						<FavoriteBorder fontSize="large" />
					</Button>
				</Grid>
			)}
			{action === 'delete' && (
				<Grid item>
					<Button
						color="secondary"
						variant="contained"
						className={styles.btnNote}
					>
						<Delete fontSize="large" />
					</Button>
				</Grid>
			)}
		</Grid>
	);
});

export const themeNote = createMuiTheme({
	overrides: {
		MuiButton: {
			text: {
				// borderBottomRightRadius: 10,
				// borderTopRightRadius: 10,
				// border: 0,
				// outline: 'none !important',
				// height: '100%',
				// padding: '0 30px',
				// boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
				// background: 'linear-gradient(45deg, #FE6B8B 30%, #f50057 90%)',
			},
		},
	},
});

export default Note;
