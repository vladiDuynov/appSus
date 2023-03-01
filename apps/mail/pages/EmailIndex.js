import AppHeader from '../../../apps/cmpsCommun/AppHeader.js'
import AppSideBar from '../../../apps/cmpsCommun/AppSideBar.js'
import EmailList from '../cmps/EmailList.js'

export default {
    // props:[], 
    template: `
    <section class="app-index">
        <AppHeader :logo="logo"/>
        <AppSideBar :folders="folders"/>
        <EmailList :emails="emails"/>
    </section>
    
    `,
    data() {
        return {
            folders: [
                { title: 'Inbox', iconUrl: '../../assets/imgs/inbox.png' },
                { title: 'Sent', iconUrl: '../../assets/imgs/sent.png' },
                { title: 'Trash', iconUrl: '../../assets/imgs/trash.png' },
            ],
            logo: {
                name: 'Email',
                iconUrl: '../../assets/imgs/gmail.png',
            },
            emails: [
                {
                    id: 'e101',
                    subject: 'Miss you!',
                    body: 'Would love to catch up sometimes',
                    isRead: false,
                    sentAt: 1551133930594,
                    removedAt: null,
                    from: 'momo@momo.com',
                    to: 'thisisme@appsus.com'
                },
                {
                    id: 'e102',
                    subject: 'Hi from New York!',
                    body: `Heeeey! We're having so much fun visiting the city! We went to central Park - wowww what a beautiful place! We're going shopping today so I hope I'll find the stuff you asked me to get you ! Love u talk soonnnn`,
                    isRead: true,
                    sentAt: 1551133960594,
                    removedAt: null,
                    from: 'labg@gmail.com',
                    to: 'thisisme@appsus.com'
                },
                {
                    id: 'e103',
                    subject: 'About your order!',
                    body: 'Your order from Zara is on its way, the delivery service will be in touch with you. ',
                    isRead: false,
                    sentAt: 1551133970594,
                    removedAt: null,
                    from: 'donotreply@zarashop.com',
                    to: 'thisisme@appsus.com'
                },
            ]
        }
    },
    methods: {},
    computed: {},
    // created(){},
    // etc.
    components: {
        AppHeader,
        AppSideBar,
        EmailList
    },
}