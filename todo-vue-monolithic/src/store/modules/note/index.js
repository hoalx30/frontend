import actions, { actionTypes } from './actions';
import mutations from './mutations';
import { getters, state } from './state';

export { actionTypes };
export const noteModule = { state, getters, actions, mutations };
