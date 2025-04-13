import { createStore } from 'vuex';
import modules from './modules';

const store = createStore({
	modules: {
		note: modules.noteModule,
	},
});

export default store;
