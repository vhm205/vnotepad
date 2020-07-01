import React, { useState } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Radio,
	RadioGroup,
	FormControlLabel,
	Button,
	TextField,
} from '@material-ui/core';

const ModalProtected = React.memo(({ open, handleClose, handlePermission }) => {
	const [permission, setPermission] = useState('public');
	const [password, setPassword] = useState('');
	const [isPassword, setIsPassword] = useState(false);
	const [error, setError] = useState('');

	const changePermission = (e) => {
		const value = e.target.value;
		value === 'password' ? setIsPassword(true) : setIsPassword(false);
		setPermission(value);
	};

	const handleSave = () => {
		if (isPassword && !password) {
			setError('Your need enter password');
			return;
		}

		setError('');
		handlePermission(permission, password);
		handleClose();
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Protect your note</DialogTitle>
			<DialogContent>
				<RadioGroup value={permission} onChange={changePermission}>
					<FormControlLabel
						label="Public Note"
						control={<Radio value="public" />}
					/>
					<FormControlLabel
						label="Private Note"
						control={<Radio value="private" />}
					/>
					<FormControlLabel
						label="Protect with password"
						control={<Radio value="password" />}
					/>
				</RadioGroup>
				<TextField
					variant="standard"
					error={!!error}
					helperText={error}
					value={password}
					disabled={!isPassword}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSave}>Save</Button>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
});

export default ModalProtected;
