import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Notify = React.memo(({ notify, handleClose }) => {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			open={notify.message ? true : false}
			autoHideDuration={5000}
			onClose={handleClose}
		>
			<Alert severity={notify.type ? notify.type : 'info'}>
				{notify.message}
			</Alert>
		</Snackbar>
	);
});

export default Notify;
