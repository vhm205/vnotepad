import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:1002/users',
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
	responseType: 'json',
});

export const httpGetProfile = (token) => {
	return api
		.get('/profile', { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => response)
		.catch((err) => {
			throw new Error(err.response.data.msg);
		});
};

export const httpUpdateProfile = (token, data) => {
	return api
		.post('/update-profile', data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response)
		.catch((err) => {
			throw new Error(err.response.data.msg);
		});
};

export const httpResetPassword = (token, data) => {
	return api
		.get('/reset-password', {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response)
		.catch((err) => {
			throw new Error(err.response.data.msg);
		});
};

export const httpUpdatePassword = (token, data) => {
	return api
		.post('/update-password', data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((response) => response)
		.catch((err) => {
			throw new Error(err.response.data.msg);
		});
};

export const httpRefreshToken = (token) => {
	return api
		.get('/refresh-token', { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => response)
		.catch((err) => {
			throw new Error(err.response.data.msg);
		});
};

export const httpLogout = (token) => {
	return api
		.post('/logout', {}, { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => response)
		.catch((err) => {
			throw new Error(err.response.data.msg);
		});
};

export const httpLogoutAll = (token) => {
	return api
		.post('/logoutAll', {}, { headers: { Authorization: `Bearer ${token}` } })
		.then((response) => response)
		.catch((err) => {
			throw new Error(err.response.data.msg);
		});
};
