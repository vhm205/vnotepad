import axios from 'axios';
import queryString from 'query-string';

const apiClient = axios.create({
	baseURL: 'http://localhost:1002/users',
	headers: { 'Content-Type': 'application/json' },
	responseType: 'json',
	timeout: 5000,
	paramsSerializer: (params) => queryString.stringify(params),
});

apiClient.interceptors.request.use(
	async (config) => config,
	(error) => {
		throw error;
	}
);

apiClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(error) => {
		throw error;
	}
);

export default apiClient;
