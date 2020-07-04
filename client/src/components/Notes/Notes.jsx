import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { Add, Favorite, Delete } from '@material-ui/icons';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useCustom } from '../../style/CommonStyles';
import { useNotesStyles } from '../../style';
import NoteAPI from '../../service/noteApi';
import Note from './Note/Note';

const Notes = () => {
	const styles = useNotesStyles();
	const custom = useCustom();
	const history = useHistory();
	const [cookies] = useCookies();
	const [open, setOpen] = useState(false);
	const [action, setAction] = useState('');
	const [notes, setNotes] = useState([]);
	const noteApi = new NoteAPI(cookies.token);

	React.useEffect(() => {
		(async () => {
			const response = await noteApi.getAll();
			setNotes(response);
		})();
	}, [noteApi]);

	const onAdd = () => history.push('/create/note');
	const onDelete = () => setAction('delete');
	const onFavorite = () => setAction('favorite');

	return (
		<Paper className={styles.paper}>
			<SpeedDial
				ariaLabel="SpeedDial handle notes"
				direction="right"
				icon={<SpeedDialIcon />}
				hidden={false}
				open={open}
				className={`${styles.speedial} ${custom.mt}`}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
			>
				<SpeedDialAction icon={<Add />} tooltipTitle="Add" onClick={onAdd} />
				<SpeedDialAction
					icon={<Favorite />}
					tooltipTitle="Favorite"
					onClick={onFavorite}
				/>
				<SpeedDialAction
					icon={<Delete />}
					tooltipTitle="Delete"
					onClick={onDelete}
				/>
			</SpeedDial>
			<Grid container direction="column">
				{notes &&
					notes.map((note) => (
						<Note key={note._id} styles={styles} action={action} {...note} />
					))}
			</Grid>
		</Paper>
	);
};

export default Notes;
