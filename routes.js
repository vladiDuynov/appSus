import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'

import KeepApp from './apps/keep/pages/NoteIndex.js'
import MailApp from './apps/mail/pages/MailIndex.js'
import BookApp from './apps/mail/pages/BookIndex.js'


const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
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
			path: '/mail',
			component: MailApp,
		},
		{
			path: '/book',
			component: BookApp,
		},
	],
}

export const router = createRouter(routerOptions)
