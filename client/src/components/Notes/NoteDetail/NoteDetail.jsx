import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {
	Paper,
	TextField,
	Breadcrumbs,
	Typography,
	CircularProgress,
	Fab,
	Grid,
} from '@material-ui/core';
import { Save as SaveIcon, Lock as LockIcon } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useNotesStyles, useCustom } from '../../../style';
import ModalProtected from './ModalProtected';

const NoteDetail = () => {
	const styles = useNotesStyles();
	const custom = useCustom();
	const [useRichTextBox, setUseRichTextBox] = useState(true);
	const [loading, setLoading] = useState(false);
	const [openModalProtect, setOpenModalProtect] = useState(false);

	const onEditorChange = (content, editor) => {
		// console.log(editor, content);
	};

	const onSave = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const handleCloseModalProtect = () => setOpenModalProtect(false);

	const handlePermission = (permission, password = '') => {
		console.log(permission, password);
	};

	return (
		<Paper className={styles.paper}>
			<Breadcrumbs className={custom.mb}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/notes">Notes</NavLink>
				<Typography color="textPrimary">note</Typography>
			</Breadcrumbs>
			<TextField
				label="Enter your title for note"
				variant="filled"
				fullWidth
				className={custom.mb}
			/>
			{useRichTextBox ? (
				<textarea style={{ width: '100%', height: 500 }}></textarea>
			) : (
				<Editor
					apiKey="mnhe8mkhfadk24d7pbtvd880370fc3jyxr34fxx0csiks0gt"
					init={initEditor}
					className={custom.mb}
					onEditorChange={onEditorChange}
				/>
			)}
			<Grid container direction="row" className={custom.mt}>
				<Fab
					variant="extended"
					color="primary"
					className={`${styles.btnWidth} ${custom.mr}`}
					disabled={loading}
					onClick={onSave}
				>
					{loading ? (
						<CircularProgress size={24} className={custom.mr} />
					) : (
						<SaveIcon className={custom.mr} />
					)}
					Save
				</Fab>
				<Fab
					variant="extended"
					color="primary"
					className={`${styles.btnWidth} ${custom.mr}`}
					onClick={() => setOpenModalProtect(true)}
				>
					<LockIcon className={custom.mr} />
					Protect
				</Fab>
				<Fab
					variant="extended"
					color="primary"
					className={`${styles.btnWidth}`}
					onClick={() => setUseRichTextBox((value) => !value)}
				>
					{useRichTextBox ? 'Disable Rich Text Box' : 'Enable Rich Text Box'}
				</Fab>
			</Grid>
			<ModalProtected
				open={openModalProtect}
				handleClose={handleCloseModalProtect}
				handlePermission={handlePermission}
			/>
		</Paper>
	);
};

const initEditor = {
	height: 500,
	menubar: false,
	plugins: [
		'advlist autolink lists link image charmap print preview anchor',
		'searchreplace visualblocks code fullscreen',
		'insertdatetime media table paste code help wordcount',
	],
	toolbar:
		'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
};

export default NoteDetail;
