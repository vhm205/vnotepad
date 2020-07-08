import React, { useState } from 'react';
import { Paper, Grid, TablePagination } from '@material-ui/core';
import { Add, Favorite, Delete } from '@material-ui/icons';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useCustom } from '../../style/CommonStyles';
import { useNotesStyles } from '../../style';
import { AlertCustom, Unauthorized } from '../../helper';
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
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 5,
		_totalRows: 0,
	});
	const noteApi = new NoteAPI(cookies.token);

	React.useEffect(() => {
		(async () => {
			try {
				const response = await noteApi.getAll(pagination);
				setPagination(response.pagination);
				setNotes(response.notes);
			} catch (error) {
				console.error(error, error.response, error.message);
				Unauthorized(error);
			}
		})();
	}, [pagination._page]);

	const onAdd = () => history.push('/create/note');
	const onDelete = () => setAction('delete');
	const onFavorite = () => setAction('favorite');

	const deleteNote = (url_id) => {
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
					await noteApi.deleteNote({ url_id });
					setNotes((val) => val.filter((note) => note.url_id !== url_id));
				}
			});
		} catch (error) {
			console.error(error, error.response, error.message);
		}
	};

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
				{notes.length &&
					notes.map((note) => (
						<Note
							key={note._id}
							styles={styles}
							action={action}
							onDelete={deleteNote}
							{...note}
						/>
					))}
				<TablePagination
					component="div"
					count={pagination._totalRows}
					page={pagination._page - 1}
					rowsPerPage={pagination._limit}
					rowsPerPageOptions={[
						5,
						10,
						25,
						50,
						{ label: 'All', value: pagination._totalRows },
					]}
					onChangePage={(_, newPage) =>
						setPagination((val) => ({ ...val, _page: newPage + 1 }))
					}
					onChangeRowsPerPage={(e) =>
						setPagination((val) => ({
							...val,
							_page: 1,
							_limit: e.target.value,
						}))
					}
				/>
			</Grid>
		</Paper>
	);
};

export default Notes;
