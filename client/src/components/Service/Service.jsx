import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:1002/users',
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
	responseType: 'json',
});
// https://api.github.com/users/mapbox

export const httpGetProfile = (token) => {
	return api
		.get('/profile', { headers: { Authorization: token } })
		.then((response) => response)
		.catch((err) => err);
};

export const httpLogout = (token) => {
	return api
		.post('/logout', {}, { headers: { Authorization: token } })
		.then((response) => response)
		.catch((err) => err);
};

export const httpLogoutAll = (token) => {
	return api
		.post('/logoutAll', {}, { headers: { Authorization: token } })
		.then((response) => response)
		.catch((err) => err);
};
