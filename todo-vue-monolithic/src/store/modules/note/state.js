const state = {
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
};

const getters = {
	latestNote: (state) => state.latestNote,
	latestSearchNote: (state) => state.latestSearchNote,
	isSearching: (state) => state.isSearching,
	status: (state) => state.status,
	priorities: (state) => state.priorities,
};

export { getters, state };
