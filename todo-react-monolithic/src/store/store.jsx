import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { noteApi } from '../components/note/api';
import noteReducer from '../components/note/slice';

const rootReducer = combineReducers({
	note: noteReducer,
	[noteApi.reducerPath]: noteApi.reducer,
});

const persistedReducer = persistReducer(
	{
		key: 'root',
		storage,
		blacklist: ['noteApi'],
	},
	rootReducer,
);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		// @ts-ignore
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(noteApi.middleware),
});

const persistor = persistStore(store);

export default { store, persistor };
