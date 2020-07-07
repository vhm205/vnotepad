import api from './api';

class UserAPI {
	constructor(token) {
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
	getProfile() {
		return api.get('/users/profile');
	}
	resetPassword() {
		return api.get('/users/reset-password');
	}
	updatePassword(data) {
		return api.post('/users/update-password', data);
	}
	updateProfile(data) {
		return api.post('/users/update-profile', data);
	}
	static refreshToken(refreshToken) {
		return api.get('/users/refresh-token', {
			headers: { Authorization: `Bearer ${refreshToken}` },
		});
	}
	static logout(refreshToken) {
		return api.get('/users/logout', {
			headers: { Authorization: `Bearer ${refreshToken}` },
		});
	}
	static logoutAll(refreshToken) {
		return api.get('/users/logoutAll', {
			headers: { Authorization: `Bearer ${refreshToken}` },
		});
	}
	static register(data) {
		return api.post('/users/register', data);
	}
	static login(data) {
		return api.post('/users/login', data);
	}
}

export default UserAPI;
