import { actions } from './action';

const initializer = () => ({ theme: true });

const reducer = (state, action) => {
	switch (action.type) {
		case actions.toggleTheme: {
			return { ...state, theme: !state.theme };
		}
		default:
			return state;
	}
};

export { initializer, reducer };
