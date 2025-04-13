import { actionTypes } from './actions';

const mutations = {
	[actionTypes.ADD_NOTE]: (state, note) => {
		state.latestNote = [...state.latestNote, note];
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	[actionTypes.DO_NOTE]: (state, id) => {
		state.latestNote = state.latestNote.map((note) => (note.id === id ? { ...note, status: 'Doing' } : note));
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	[actionTypes.FINISH_NOTE]: (state, id) => {
		state.latestNote = state.latestNote.map((note) => (note.id === id ? { ...note, status: 'Done' } : note));
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	[actionTypes.CANCEL_NOTE]: (state, id) => {
		state.latestNote = state.latestNote.map((note) => (note.id === id ? { ...note, status: 'Cancel' } : note));
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	[actionTypes.DELETE_NOTE]: (state, id) => {
		state.latestNote = state.latestNote.filter((note) => note.id !== id);
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	[actionTypes.SEARCH_NOTE]: (state, { searchValue, searchPriority, searchStatus }) => {
		// prettier-ignore
		state.latestSearchNote = state.latestNote.filter((note) => note.value.toLowerCase().includes(searchValue.toLowerCase()) && searchPriority.includes(note.priority) && searchStatus.includes(note.status));
		state.isSearching = true;
	},
	[actionTypes.RESET_SEARCH_NOTE]: (state) => {
		state.latestSearchNote = [];
		state.isSearching = false;
	},
};

export default mutations;
