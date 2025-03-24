import { useMemo, useReducer } from 'react';
import { actionsCreator } from './action';
import GlobalContext from './GlobalContext';
import { initializer, reducer } from './reducer';

const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, undefined, initializer);
	const actions = useMemo(() => actionsCreator(dispatch), [dispatch]);
	const value = useMemo(() => ({ state, actions }), [state, actions]);

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
