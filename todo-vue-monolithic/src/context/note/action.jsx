export const actions = {
	add: 'note/add-note',
	do: 'note/do-note',
	finish: 'note/finish-note',
	cancel: 'note/cancel-note',
	remove: 'note/remove-note',
	search: 'note/search-note',
	resetSearch: 'note/reset-search-note',
};

export const actionsCreator = (dispatch) => ({
	add: (value) => dispatch({ type: actions.add, value }),
	do: (id) => dispatch({ type: actions.do, id }),
	finish: (id) => dispatch({ type: actions.finish, id }),
	cancel: (id) => dispatch({ type: actions.cancel, id }),
	remove: (id) => dispatch({ type: actions.remove, id }),
	search: (value) => dispatch({ type: actions.search, value }),
	resetSearch: () => dispatch({ type: actions.resetSearch }),
});
