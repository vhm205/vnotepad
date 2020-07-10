import React from 'react';
import {
	Grid,
	Box,
	Typography,
	CardActionArea,
	Button,
} from '@material-ui/core';
import { FavoriteBorder, Favorite, Delete } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { AlertCustom } from '../../../helper';

const Note = React.memo(({ styles, action, api, setNotes, ...info }) => {
	const history = useHistory();
	const [favorite, setFavorite] = React.useState(false);

	React.useEffect(() => {
		setFavorite(info.isFavorite);
	}, [info.isFavorite]);

	const openNote = () => history.push(`/note/${info.url_id}`);

	const handleFavorite = async () => {
		try {
			await api.updateFavorite({
				isFavorite: !favorite,
				url_id: info.url_id,
			});
			setFavorite((val) => !val);
		} catch {}
	};

	const handleDelete = () => {
		try {
			AlertCustom({
				title: 'Do you want to delete it?',
				text: 'You cannot recover it',
				icon: 'question',
				showConfirmButton: true,
				showCancelButton: true,
				confirmText: 'Yes',
				cancelText: 'No',
				allowOutsideClick: true,
			}).then(async (response) => {
				if (response.isConfirmed) {
					await api.deleteNote({ url_id: info.url_id });
					setNotes((val) => val.filter((note) => note.url_id !== info.url_id));
				}
			});
		} catch (error) {
			console.error(error, error.response, error.message);
		}
	};

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
					<Button
						variant="contained"
						className={styles.btnNote}
						onClick={handleFavorite}
					>
						{favorite ? (
							<Favorite fontSize="large" />
						) : (
							<FavoriteBorder fontSize="large" />
						)}
					</Button>
				</Grid>
			)}
			{action === 'delete' && (
				<Grid item>
					<Button
						color="secondary"
						variant="contained"
						className={styles.btnNote}
						onClick={handleDelete}
					>
						<Delete fontSize="large" />
					</Button>
				</Grid>
			)}
		</Grid>
	);
});

export default Note;
