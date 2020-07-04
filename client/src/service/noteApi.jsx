import api from './api';

class NoteAPI {
	constructor(token) {
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		api.defaults.baseURL = 'http://localhost:1002/notes';
	}

	createNote(data) {
		return api.post('/create', data);
	}
	getAll() {
		return api.get('/get-all');
	}
	static getNoteById(url_id) {
		return api.get(`/note/${url_id}`);
	}
}

export default NoteAPI;
