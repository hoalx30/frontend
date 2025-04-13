import { reactive } from 'vue';

const state = reactive({
	latestNote: JSON.parse(localStorage.getItem('latestNote')) ?? [],
	latestSearchNote: [],
	isSearching: false,
	status: [
		{ id: 1, value: 'Todo' },
		{ id: 2, value: 'Doing' },
		{ id: 3, value: 'Done' },
		{ id: 4, value: 'Cancel' },
	],
	priorities: [
		{ id: 1, value: 'Low' },
		{ id: 2, value: 'Medium' },
		{ id: 3, value: 'High' },
	],
});

const actions = {
	addNote: (note) => {
		state.latestNote.push(note);
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	doNote: (id) => {
		state.latestNote = state.latestNote.map((note) => (note.id === id ? { ...note, status: 'Doing' } : note));
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	finishNote: (id) => {
		state.latestNote = state.latestNote.map((note) => (note.id === id ? { ...note, status: 'Done' } : note));
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	cancelNote: (id) => {
		state.latestNote = state.latestNote.map((note) => (note.id === id ? { ...note, status: 'Cancel' } : note));
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	deleteNote: (id) => {
		state.latestNote = state.latestNote.filter((note) => note.id !== id);
		localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
	},
	searchNote: (searchValue, searchPriority, searchStatus) => {
		// prettier-ignore
		state.latestSearchNote = state.latestNote.filter(
      (note) =>
        note.value.toLowerCase().includes(searchValue.toLowerCase()) &&
        searchPriority.includes(note.priority) &&
        searchStatus.includes(note.status)
    );
		state.isSearching = true;
	},
	resetSearchNote: () => {
		state.latestSearchNote = [];
		state.isSearching = false;
	},
};

export { actions, state };
