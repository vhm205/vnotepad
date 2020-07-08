import Swal from 'sweetalert2';

export const setExpiresCookies = (exdays) => {
	const date = new Date();
	date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
	return date;
};

export const AlertCustom = (props) => {
	return Swal.fire({
		icon: props.icon || 'info',
		title: props.title || '',
		text: props.text || '',
		showConfirmButton: props.showConfirmButton || true,
		showCancelButton: props.showCancelButton || false,
		confirmButtonText: props.confirmText || 'Ok',
		cancelButtonText: props.cancelText || 'Cancel',
		backdrop: 'rgba(85,85,85, .4)',
		allowOutsideClick: props.allowOutsideClick || false,
	});
};

export const Unauthorized = (error) => {
	if (
		error.response &&
		error.response.data.msg === 'Not authorized to access this resource'
	) {
		AlertCustom({
			title: 'You need reload the page',
			icon: 'info',
			showConfirmButton: true,
			showCancelButton: false,
		}).then((response) => {
			if (response.isConfirmed) {
				window.location.reload();
			}
		});
	}
};
