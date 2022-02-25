import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Sobre from '../views/sobre.vue';
import Contato from '../views/contato.vue';
import Login from '../views/users/login.vue';
import CadastrarUsuario from '../views/users/cadastrarUsuario.vue';

import Authentication from './middleware/authentication.js';


Vue.use(VueRouter)

const routes = [

	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			authenticated: true,
		}
	},

	{
		path: '/sobre',
		name: 'sobre',
		component: Sobre,
		meta: {
			authenticated: true,
		}
	},

	{
		path: '/contato',
		name: 'contato',
		component: Contato,
		meta: {
			authenticated: true,
		}
	},

	{
		path: '/login',
		name: 'login',
		component: Login,
	},

	{
		path: '/cadastar-usuario',
		name: 'cadastrarUsuario',
		component: CadastrarUsuario,
	},



];


const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
});


router.beforeEach( Authentication );


export default router