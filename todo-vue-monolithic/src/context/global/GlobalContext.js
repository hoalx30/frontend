import { provide } from 'vue';
import { actions, state } from './reducer';

export const GlobalContextID = Symbol();

export const createGlobalStore = () => {
	provide(GlobalContextID, { state, actions });
};
