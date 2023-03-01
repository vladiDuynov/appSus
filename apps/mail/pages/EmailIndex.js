import AppHeader from '../../../apps/cmpsCommun/AppHeader.js'
import AppSideBar from '../../../apps/cmpsCommun/AppSideBar.js'
import EmailList from '../cmps/EmailList.js'

export default {
    // props:[], 
    template: `
    <section class="app-index">
        <AppHeader :logo="logo"/>
        <AppSideBar :folders="folders"/>
        <EmailList/>
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
            }
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