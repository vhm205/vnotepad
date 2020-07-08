import React, { useState, useEffect, useContext } from 'react';
import shortId from 'shortid';
import { Editor } from '@tinymce/tinymce-react';
import { config } from '../../../config';
import {
	Paper,
	Fab,
	Grid,
	TextField,
	Breadcrumbs,
	Typography,
	Popover,
	CircularProgress,
	TextareaAutosize,
} from '@material-ui/core';
import { Save as SaveIcon, Lock as LockIcon } from '@material-ui/icons';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useNotesStyles, useCustom } from '../../../style';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../../context/UserContext';
import NoteAPI from '../../../service/noteApi';
import ModalProtected from '../Modal/ModalProtected';
import Notify from '../Notify/Notify';

const NoteDetail = () => {
	const styles = useNotesStyles();
	const custom = useCustom();
	const history = useHistory();
	const { url_id } = useParams();
	const [user] = useContext(UserContext);
	const [cookies] = useCookies();
	const [useRichTextBox, setUseRichTextBox] = useState(true);
	const [openModalProtect, setOpenModalProtect] = useState(false);
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [link, setLink] = useState('');
	const [anchorEl, setAnchorEl] = useState(null);
	const [notify, setNotify] = useState({ type: '', message: '' });
	const [permission, setPermission] = useState({
		access: 'public',
		protected: '',
	});
	const noteApi = new NoteAPI(cookies.token);

	useEffect(() => {
		if (url_id) {
			(async () => {
				const response = await NoteAPI.getNoteById(url_id);
				if (!response.owner) return history.push('/create/note');

				setTitle(response.title);
				setContent(response.content);
				setLink(`${config.BASE_URL}/note/${response.url_id}`);
				setPermission({
					access: response.access,
					protected: response.protected,
				});
				sessionStorage.setItem('content', response.content);
			})();
		}
	}, [url_id]);

	useEffect(() => {
		const content = sessionStorage.getItem('content');
		setContent(content);
	}, [useRichTextBox]);

	const onSave = async () => {
		setLoading(true);

		try {
			const items = {
				url_id: url_id ? url_id : shortId.generate(),
				title: title,
				content: content,
				access: permission.access,
				owner: user.email,
				protected: permission.access === 'password' ? permission.protected : '',
			};
			if (url_id) {
				const response = await noteApi.updateNote(items);
				setNotify({
					type: response.status ? 'success' : 'warning',
					message: response.msg,
				});
			} else {
				const response = await noteApi.createNote(items);
				history.push(`/note/${response.url_id}`);
			}
		} catch (error) {
			if (error.response) {
				setNotify({ type: 'error', message: error.response.data.msg });
			} else {
				setNotify({ type: 'error', message: error.message });
			}
		}

		setLoading(false);
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
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			{useRichTextBox ? (
				<TextareaAutosize
					style={{ width: '100%', height: 500 }}
					rows={1000}
					defaultValue={content}
					onChange={(e) => {
						setContent(e.target.value);
						sessionStorage.setItem('content', e.target.value);
					}}
				/>
			) : (
				<Editor
					apiKey="mnhe8mkhfadk24d7pbtvd880370fc3jyxr34fxx0csiks0gt"
					init={initEditor}
					className={custom.mb}
					value={content}
					onEditorChange={(content, editor) => {
						setContent(content);
						sessionStorage.setItem('content', content);
					}}
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
					className={`${styles.btnWidth} ${custom.mr}`}
					onClick={() => setUseRichTextBox((value) => !value)}
				>
					{useRichTextBox ? 'Disable Rich Text Box' : 'Enable Rich Text Box'}
				</Fab>
				<Fab
					variant="extended"
					color="primary"
					className={`${styles.btnWidth}`}
					onClick={(e) => setAnchorEl(e.currentTarget)}
				>
					Share Link
				</Fab>
			</Grid>
			<Popover
				open={!!anchorEl}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'center',
					horizontal: 'center',
				}}
				onClose={() => setAnchorEl(null)}
			>
				<Typography style={{ padding: 15 }}>
					<a href={link} target="_blank" rel="noopener noreferrer">
						{link}
					</a>
				</Typography>
			</Popover>
			<ModalProtected
				open={openModalProtect}
				permission={permission}
				setPermission={setPermission}
				handleClose={() => setOpenModalProtect(false)}
			/>
			<Notify
				notify={notify}
				handleClose={() => setNotify({ type: '', message: '' })}
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
