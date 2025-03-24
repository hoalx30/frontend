import { actions } from './action';

const initializer = () => ({
	latestNote: JSON.parse(localStorage.getItem('latestNote')) || [],
	latestSearchNote: [],
	priorities: [
		{ id: 1, value: 'Low' },
		{ id: 2, value: 'Medium' },
		{ id: 3, value: 'High' },
	],
	status: [
		{ id: 1, value: 'Todo' },
		{ id: 2, value: 'Doing' },
		{ id: 3, value: 'Done' },
		{ id: 4, value: 'Cancel' },
	],
	isSearching: false,
});

const reducer = (state, action) => {
	switch (action.type) {
		case actions.add: {
			const latestNote = [...state.latestNote, action.value];
			localStorage.setItem('latestNote', JSON.stringify(latestNote));
			return { ...state, latestNote: [...state.latestNote, action.value] };
		}
		case actions.do: {
			const latestNote = state.latestNote.map((note) => (note.id === action.id ? { ...note, status: 'Doing' } : note));
			localStorage.setItem('latestNote', JSON.stringify(latestNote));
			return { ...state, latestNote };
		}
		case actions.finish: {
			const latestNote = state.latestNote.map((note) => (note.id === action.id ? { ...note, status: 'Done' } : note));
			localStorage.setItem('latestNote', JSON.stringify(latestNote));
			return { ...state, latestNote };
		}
		case actions.cancel: {
			const latestNote = state.latestNote.map((note) => (note.id === action.id ? { ...note, status: 'Cancel' } : note));
			localStorage.setItem('latestNote', JSON.stringify(latestNote));
			return { ...state, latestNote };
		}
		case actions.remove: {
			const latestNote = state.latestNote.filter((note) => note.id !== action.id);
			localStorage.setItem('latestNote', JSON.stringify(latestNote));
			return { ...state, latestNote };
		}
		case actions.search: {
			const { textSearch, prioritiesSearch, statusSearch } = action.value;
			// prettier-ignore
			const latestSearchNote = state.latestNote.filter((note) => note.value.toLowerCase().includes(textSearch.toLowerCase()) && prioritiesSearch.includes(note.priority) && statusSearch.includes(note.status))
			return { ...state, isSearching: true, latestSearchNote };
		}
		case actions.resetSearch: {
			return { ...state, isSearching: false };
		}
		default:
			return state;
	}
};

export { initializer, reducer };
