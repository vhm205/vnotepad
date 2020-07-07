import React from 'react';
import {
	Grid,
	Box,
	Typography,
	CardActionArea,
	Button,
} from '@material-ui/core';
import { FavoriteBorder, Delete } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const Note = React.memo(({ styles, action, onDelete, ...info }) => {
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
						onClick={() => onDelete(info.url_id)}
					>
						<Delete fontSize="large" />
					</Button>
				</Grid>
			)}
		</Grid>
	);
});

export default Note;
