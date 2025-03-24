export const actions = {
	toggleTheme: 'global/toggle-theme',
};

export const actionsCreator = (dispatch) => ({
	toggleTheme: (value) => dispatch({ type: actions.toggleTheme, value }),
});
