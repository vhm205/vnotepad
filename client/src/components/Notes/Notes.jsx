import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { Add, Favorite, Delete } from '@material-ui/icons';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { useCustom } from '../../style/CommonStyles';
import { useNotesStyles } from '../../style/NoteStyles';
import Note from './Note/Note';

const Notes = () => {
	const styles = useNotesStyles();
	const custom = useCustom();
	const [open, setOpen] = useState(false);
	const [action, setAction] = useState('');

	const onAdd = () => {
		console.log('Add note');
		setAction('add');
	};
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
				<Note styles={styles} action={action} />
				<Note styles={styles} action={action} />
				<Note styles={styles} action={action} />
			</Grid>
		</Paper>
	);
};

export default Notes;
