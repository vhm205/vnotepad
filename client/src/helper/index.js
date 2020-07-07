import Swal from 'sweetalert2';

export const setExpiresCookies = (exdays) => {
	const date = new Date();
	date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
	return date;
};

export const AlertCustom = (
	title,
	text,
	icon = 'info',
	showConfirmButton = false,
	showCancelButton = false,
	confirmText = 'Ok',
	cancelText = 'Cancel'
) => {
	return Swal.fire({
		icon: icon,
		title: title,
		text: text,
		showConfirmButton: showConfirmButton,
		showCancelButton: showCancelButton,
		confirmButtonText: confirmText,
		cancelButtonText: cancelText,
	});
};
