import { createRouter, createWebHistory } from 'vue-router';
import { AboutPage, NotePage } from './pages';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: NotePage },
		{ path: '/about', component: AboutPage },
	],
});

export default router;
