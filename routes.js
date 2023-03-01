import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'

import KeepApp from './apps/keep/pages/NoteIndex.js'
import EmailApp from './apps/mail/pages/EmailIndex.js'
import BookApp from './apps/book/pages/BookIndex.js'


const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
			children: [
			]
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/keep',
			component: KeepApp,
		},
		{
			path: '/email',
			component: EmailApp,
		},
		{
			path: '/book',
			component: BookApp,
		},

	],
}

export const router = createRouter(routerOptions)
