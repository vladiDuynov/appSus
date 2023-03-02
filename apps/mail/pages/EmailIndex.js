import AppHeader from '../../../apps/cmpsCommun/AppHeader.js'
import AppSideBar from '../../../apps/cmpsCommun/AppSideBar.js'
import { emailService } from '../services/email.service.js'
import ComposeEmail from '../cmps/ComposeEmail.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    // props:[], 
    template: `
    <section class="app-index">

        <AppHeader :logo="logo"/>

        <AppSideBar :folders="folders" :isEmail="true" @openComposer="openComposer"/>
        
        <ComposeEmail v-if="isComposing" @sendEmail="sendEmail"/>

        <RouterView 
        :emails="emails" 
        @removeEmail="removeEmail"
        @toggleIsRead="toggleIsRead"
        />
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
            emails: null,
            filterBy: '',
            isComposing: false,
        }
    },
    methods: {
        openComposer() {
            console.log('compose', this.isComposing)
            if (!this.isComposing) this.isComposing = true // for now- allow only opening one composer at a time
        },
        removeEmail(event) { // event is email.id
            console.log('remove email', event)
            emailService.get(event)
                .then(email => {
                    // console.log(email)
                    if (email.removedAt) emailService.remove(event) // if email was removed already=removedAt has a truthy value, removing again means removing from trash so deleting 
                    else { // if email never removed, just "send to trash" by adding removedAt value
                        email.removedAt = Date.now()
                        emailService.save(email)
                    }
                })
        },
        toggleIsRead(event) { // event is email.id
            console.log('toggleIsRead', event)
            emailService.get(event)
                .then(email => {
                    // console.log(email)
                    email.isRead = !email.isRead
                    emailService.save(email)
                })
            emailService.query()
                .then(emails => {
                    this.emails = emails
                })
        },
        sendEmail(event) {
            // console.log('send email :', event)
            this.isComposing = false

            let newEmail = emailService.getEmptyEmail()
            const { body, to, subject, from } = event
            newEmail.to = to
            newEmail.from = from
            newEmail.subject = subject
            newEmail.body = body
            newEmail.sentAt = Date.now()
            newEmail.isRead = true
            // console.log('newEmail', newEmail)
            emailService.save(newEmail) // NEED TO REFRESH LIST
            // console.log('emails', this.emails)

            eventBus.emit('show-msg', { txt: 'Sent Email', type: 'success' })

        },
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        }
    },
    computed: {
        filteredEmails() {
            return this.emails.filter()
        }
    },
    created() {
        this.loadEmails()
    },
    watch: {
        emails1() {
            this.loadEmails()
        }
    },
    // etc.
    components: {
        AppHeader,
        AppSideBar,
        ComposeEmail,
    },
}