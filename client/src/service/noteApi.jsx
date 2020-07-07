import api from './api';

class NoteAPI {
	constructor(token) {
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}

	createNote(data) {
		return api.post('/notes/create', data);
	}
	getAll() {
		return api.get('/notes/get-all');
	}
	updateNote(data) {
		return api.patch('/notes/update-note', data);
	}
	deleteNote(params) {
		return api.get('/notes/delete-note', { params });
	}
	static getNoteById(url_id) {
		return api.get(`/notes/note/${url_id}`);
	}
}

export default NoteAPI;