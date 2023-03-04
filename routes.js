import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'

import KeepApp from './apps/keep/pages/NoteIndex.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'

import EmailDetails from './apps/mail/pages/EmailDetails.js'
import EmailList from './apps/mail/cmps/EmailList.js'
import BookApp from './apps/book/pages/BookApp.js'
import BookIndex from './apps/book/pages/BookIndex.js'
// import BookDetails from './apps/book/pages/BookDetails.js'
// import BookEdit from './apps/book/pages/BookEdit.js'
import BookAdd from './apps/book/pages/BookAdd.js'


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
			component: EmailIndex,
			children: [
				{
					path:'inbox',
					component : EmailList
				},
				{
					path: 'details/:emailId',
					component: EmailDetails
				},
			]
		},
		{
            path: '/books',
            component: BookApp,
			children :[
				{
					path:'index',
					component: BookIndex
				},
				{
					path:'addBook',
					component: BookAdd
				},

			]
        },
        // {
        //     path:'/books/:bookId',
        //     component:BookDetails
        // },
        // {
        //     path:'/books/edit/:bookId?',
        //     component: BookEdit
        // },
	],
}

export const router = createRouter(routerOptions)
