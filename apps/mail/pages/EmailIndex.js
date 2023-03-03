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

        <AppSideBar 
        :folders="folders" 
        :isEmail="true" 
        @openComposer="openComposer"
        @setFilter="setFilter"
        />
        
        <ComposeEmail v-if="isComposing" @sendEmail="sendEmail" @closeComposer="closeComposer"/>

        <RouterView 
        v-if="emails"
        :emails="processedEmails" 
        @removeEmail="removeEmail"
        @toggleIsRead="toggleIsRead"
        @setSort="setSort"
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
            filterBy: { folder: 'Inbox' },
            sortBy: 'date',
            isComposing: false,
        }
    },
    methods: {
        openComposer() {
            console.log('compose', this.isComposing)
            if (!this.isComposing) this.isComposing = true // for now- allow only opening one composer at a time
        },
        removeEmail(emailId) {
            console.log('remove email', emailId)

            const idx = this.emails.findIndex(email => email.id === emailId)
            var emailRemovedAt = this.emails[idx].removedAt
            if (emailRemovedAt) this.emails.splice(idx, 1)
            else this.emails[idx].removedAt = Date.now()

            emailService.removeEmail(emailId)
        },
        toggleIsRead(emailId) {
            console.log('toggleIsRead', emailId)
            const idx = this.emails.findIndex(email => email.id === emailId)
            this.emails[idx].isRead = !this.emails[idx].isRead

            emailService.toggleIsRead(emailId)
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

            this.emails.push(newEmail)
            emailService.save(newEmail)

            eventBus.emit('show-msg', { txt: 'Sent Email', type: 'success' })
        },
        closeComposer() {
            this.isComposing = false
        },
        setFilter(folderTitle) {
            this.filterBy.folder = folderTitle
        },
        setSort(sortByVal) {
            this.sortBy = sortByVal
            console.log('sortByVal', sortByVal)
        },
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        },
    },
    computed: {
        filteredEmails() {
            if (this.filterBy.folder === 'Inbox') {
                var filteredEm = this.emails.filter(email => {
                    return email.to === 'thisisme@appsus.com' && !email.removedAt
                    console.log('filtering')
                })
                return filteredEm

            } else if (this.filterBy.folder === 'Sent') {
                return this.emails.filter(email => {
                    return email.from === 'thisisme@appsus.com' && !email.removedAt
                    console.log('filtering')
                })
            } else if (this.filterBy.folder === 'Trash') {
                return this.emails.filter(email => {
                    return email.removedAt
                    console.log('filtering')
                })
            }
        },
        processedEmails() {
            let emailsFiltered = this.filteredEmails

            if (this.sortBy === 'date') {
                emailsFiltered.sort((email1, email2) => (email1.sentAt - email2.sentAt)) // * this.sortBy.price
            } else if (this.sortBy === 'subject') {
                emailsFiltered.sort((email1, email2) => email1.subject.localeCompare(email2.subject)) // * this.sortBy.title
            }

            return emailsFiltered
        }
    },
    created() {
        this.loadEmails()
        this.$emit('hideMain')
    },
    watch: {
        emails1() {
            this.loadEmails()
        }
    },
    components: {
        AppHeader,
        AppSideBar,
        ComposeEmail,
    },
}