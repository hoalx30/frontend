import { useMemo, useReducer } from 'react';
import { actionsCreator } from './action';
import NoteContext from './NoteContext';
import { initializer, reducer } from './reducer';

const NoteProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, undefined, initializer);
	const actions = useMemo(() => actionsCreator(dispatch), [dispatch]);
	const value = useMemo(() => ({ state, actions }), [state, actions]);

	return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export default NoteProvider;
