import React from 'react';
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
		const [error, setError] = React.useState('');

		const onClose = () => {
			if (permission.access === 'password' && !permission.protected) {
				setError('Your need enter password');
				return;
			}

			setError('');
			handleClose();
		};

		return (
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>Protect your note</DialogTitle>
				<DialogContent>
					<RadioGroup
						value={permission.access}
						onChange={(e) =>
							setPermission((val) => ({ ...val, access: e.target.value }))
						}
					>
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
						disabled={permission.access !== 'password'}
						value={permission.protected}
						onChange={(e) => {
							e.persist();
							setPermission((val) => ({ ...val, protected: e.target.value }));
						}}
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
