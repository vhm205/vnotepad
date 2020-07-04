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

const ModalProtected = React.memo(
	({ open, permission, setPermission, handleClose }) => {
		const [password, setPassword] = useState('');
		const [isPassword, setIsPassword] = useState(false);
		const [error, setError] = useState('');

		const changePermission = (e) => {
			const value = e.target.value;
			value === 'password' ? setIsPassword(true) : setIsPassword(false);
			setPermission({ access: value });
		};

		const onClose = () => {
			if (isPassword && !password) {
				setError('Your need enter password');
				return;
			}

			setError('');
			setPermission((value) => ({ ...value, protected: password }));
			handleClose();
		};

		return (
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>Protect your note</DialogTitle>
				<DialogContent>
					<RadioGroup value={permission.access} onChange={changePermission}>
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
						disabled={!isPassword && !permission.protected}
						value={permission.protected}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Close</Button>
				</DialogActions>
			</Dialog>
		);
	}
);

export default ModalProtected;
