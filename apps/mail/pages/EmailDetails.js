import { emailService } from "../services/email.service.js"

export default {
    props: ['emails'],
    template: `
        <section v-if="email" class="email-details">

            <RouterLink to="/email/inbox" class="back-link">
                <img src="../../../assets/imgs/output-onlinepngtools.png">
            </RouterLink>

            <div class="subject">{{email.subject}}</div>
            <div class="flex">
                <img src="../../../assets/imgs/user.png">
                <div class="email-info flex align-center justify-between">
                    <div class="flex flex-column">    
                        <div class="from"><span>From : </span>{{email.from}}</div>
                        <div class="to"><span> To : </span>{{emailTo}}</div>
                    </div>
                    <div class="sentAt">sent on {{date}}</div>
                </div>
            </div>
            
            <div v-if="email.removedAt" class="removedAt">You sent this email to the trash on {{dateRem}}</div>
            <div class="body">{{email.body}}</div>
        </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    methods: {
        loadEmail() {
            emailService.get(this.emailId)
                .then(email => this.email = email)
        }
    },
    computed: {
        emailId() {
            return this.$route.params.emailId
        },
        emailTo(){
            return (this.email.to === 'thisisme@appsus.com') ? `me` : this.email.to //  (${this.email.to})
        },
        date() {
            const date = new Date(this.email.sentAt)
            // return `${date.getMonth()} ${date.getDay()}`            

            const option = {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }
            return new Intl.DateTimeFormat('en', option).format(date)
        },
        dateRem() {
            const date = new Date(this.email.removedAt)
            // return `${date.getMonth()} ${date.getDay()}`            

            const option = {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }
            return new Intl.DateTimeFormat('en', option).format(date)
        }
    },
    created() {
        this.loadEmail()
    },
    mounted() {
        // mark as read only if unread
        emailService.get(this.emailId)
            .then(email => {
                if (!email.isRead) {
                    email.isRead = true
                    emailService.save(email)
                }
            })
    },

    watch: {
        emailId() {
            this.loadEmail()
        }
    },
    // etc.
    // components:{},
}