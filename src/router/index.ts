import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Card from '../views/Card.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
	},
	{
		path: '/card',
		name: 'Card',
		component: Card,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
