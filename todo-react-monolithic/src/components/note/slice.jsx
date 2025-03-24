/** Use for Redux or Redux Toolkit Only */
import { createSlice } from '@reduxjs/toolkit';
import { noteThunkActions } from './action';

const initialState = {
	latestNote: [],
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
	isFetching: false,
};

const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		addNote: (state, action) => {
			state.latestNote.push(action.payload);
			localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
		},
		doNote: (state, action) => {
			state.latestNote = state.latestNote.map((note) => (note.id === action.payload ? { ...note, status: 'Doing' } : note));
			localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
		},
		finishNote: (state, action) => {
			state.latestNote = state.latestNote.map((note) => (note.id === action.payload ? { ...note, status: 'Done' } : note));
			localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
		},
		cancelNote: (state, action) => {
			state.latestNote = state.latestNote.map((note) => (note.id === action.payload ? { ...note, status: 'Cancel' } : note));
			localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
		},
		removeNote: (state, action) => {
			state.latestNote = state.latestNote.filter((note) => note.id !== action.payload);
			localStorage.setItem('latestNote', JSON.stringify(state.latestNote));
		},
		searchNote: (state, action) => {
			const { textSearch, prioritiesSearch, statusSearch } = action.payload;
			// prettier-ignore
			state.latestSearchNote = state.latestNote.filter((note) => note.value.toLowerCase().includes(textSearch.toLowerCase()) && prioritiesSearch.includes(note.priority) && statusSearch.includes(note.status));
			state.isSearching = true;
		},
		resetSearchNote: (state) => {
			state.isSearching = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(noteThunkActions.fetchLatestNote.fulfilled, (state, action) => {
				state.isFetching = false;
				state.latestNote = action.payload;
			})
			.addCase(noteThunkActions.saveNote.fulfilled, (state, action) => {
				state.isFetching = false;
				state.latestNote.push(action.payload);
			})
			.addCase(noteThunkActions.doNote.fulfilled, (state, action) => {
				state.isFetching = false;
				state.latestNote = state.latestNote.map((note) => (note.id === action.payload.id ? { ...note, status: action.payload.status } : note));
			})
			.addCase(noteThunkActions.finishNote.fulfilled, (state, action) => {
				state.isFetching = false;
				state.latestNote = state.latestNote.map((note) => (note.id === action.payload.id ? { ...note, status: action.payload.status } : note));
			})
			.addCase(noteThunkActions.cancelNote.fulfilled, (state, action) => {
				state.isFetching = false;
				state.latestNote = state.latestNote.map((note) => (note.id === action.payload.id ? { ...note, status: action.payload.status } : note));
			})
			.addCase(noteThunkActions.removeNote.fulfilled, (state, action) => {
				state.isFetching = false;
				state.latestNote = state.latestNote.filter((note) => note.id !== action.payload);
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
				// prettier-ignore
				(state) => { state.isFetching = true},
			);
	},
});

export const noteActions = noteSlice.actions;
export default noteSlice.reducer;
