export const actionTypes = {
	ADD_NOTE: 'ADD_NOTE',
	CANCEL_NOTE: 'CANCEL_NOTE',
	DELETE_NOTE: 'DELETE_NOTE',
	DO_NOTE: 'DO_NOTE',
	FINISH_NOTE: 'FINISH_NOTE',
	RESET_SEARCH_NOTE: 'RESET_SEARCH_NOTE',
	SEARCH_NOTE: 'SEARCH_NOTE',
};

const actions = {
	[actionTypes.ADD_NOTE]: ({ commit }, note) => commit(actionTypes.ADD_NOTE, note),
	[actionTypes.DO_NOTE]: ({ commit }, id) => commit(actionTypes.DO_NOTE, id),
	[actionTypes.FINISH_NOTE]: ({ commit }, id) => commit(actionTypes.FINISH_NOTE, id),
	[actionTypes.CANCEL_NOTE]: ({ commit }, id) => commit(actionTypes.CANCEL_NOTE, id),
	[actionTypes.DELETE_NOTE]: ({ commit }, id) => commit(actionTypes.DELETE_NOTE, id),
	// prettier-ignore
	[actionTypes.SEARCH_NOTE]: ({ commit }, { searchValue, searchPriority, searchStatus }) => commit(actionTypes.SEARCH_NOTE, { searchValue, searchPriority, searchStatus }),
	[actionTypes.RESET_SEARCH_NOTE]: ({ commit }) => commit(actionTypes.RESET_SEARCH_NOTE),
};

export default actions;
