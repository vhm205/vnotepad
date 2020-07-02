import React, { useState, useContext } from 'react';
import shortId from 'shortid';
import { Editor } from '@tinymce/tinymce-react';
import {
	Paper,
	TextField,
	Breadcrumbs,
	Typography,
	CircularProgress,
	TextareaAutosize,
	Fab,
	Grid,
} from '@material-ui/core';
import { Save as SaveIcon, Lock as LockIcon } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useNotesStyles, useCustom } from '../../../style';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../../context/UserContext';
import ModalProtected from './ModalProtected';

const NoteDetail = () => {
	const styles = useNotesStyles();
	const custom = useCustom();
	const [user] = useContext(UserContext);
	const [cookies] = useCookies();
	const [useRichTextBox, setUseRichTextBox] = useState(true);
	const [openModalProtect, setOpenModalProtect] = useState(false);
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [permission, setPermission] = useState({
		access: 'public',
		protected: '',
	});

	const onSave = () => {
		const newNote = {
			url_id: shortId.generate(),
			title: title,
			content: content,
			access: permission.access,
			owner: user.email,
			protected: permission.access === 'password' ? permission.protected : null,
		};
		console.log(newNote);

		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const handleCloseModalProtect = () => setOpenModalProtect(false);

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
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			{useRichTextBox ? (
				<TextareaAutosize
					style={{ width: '100%', height: 500 }}
					rows={1000}
					onChange={(e) => setContent(e.target.value)}
				/>
			) : (
				<Editor
					apiKey="mnhe8mkhfadk24d7pbtvd880370fc3jyxr34fxx0csiks0gt"
					init={initEditor}
					className={custom.mb}
					onEditorChange={(content, editor) => setContent(content)}
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
				permission={permission}
				setPermission={setPermission}
				handleClose={handleCloseModalProtect}
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
	toolbar: `undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help`,
};

export default NoteDetail;
