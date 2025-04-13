/** Not needed for RTK Query */

export default {
	latestNote: (state) => state.note.latestNote,
	latestSearchNote: (state) => state.note.latestSearchNote,
	priorities: (state) => state.note.priorities,
	status: (state) => state.note.status,
	isSearching: (state) => state.note.isSearching,
	isFetching: (state) => state.note.isFetching,
};
