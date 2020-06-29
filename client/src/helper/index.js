import Swal from 'sweetalert2';

export const setExpiresCookies = (exdays) => {
	const date = new Date();
	date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
	return date;
};

export const alertInfo = (
	title,
	text,
	icon = 'info',
	showConfirmButton = false,
	timer = 1500
) => {
	return Swal.fire({
		icon: icon,
		title: title,
		text: text,
		showConfirmButton: showConfirmButton,
		timer: timer,
	});
};
