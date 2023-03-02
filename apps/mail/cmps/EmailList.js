import { emailService } from '../services/email.service.js'
import EmailPreview from './EmailPreview.js'


export default {
    props: ['emails'],
    template: `
    <section class="email-list flex flex-column">
        <div class="emails-sort"></div>
        <ul>
            <li v-for="email in emails" :key="email.id" @click="$router.push('details/'+email.id)">

                <EmailPreview 
                :email="email"
                @remove="remove"
                @toggleIsRead="toggleIsRead"
                />

            </li>
            
        </ul>
    </section>
    `,
    data() {
        return {}
    },
    methods: {
        remove(event) {
            // console.log('removing?', event)
            this.$emit('removeEmail', event)
        },
        toggleIsRead(event) {
            console.log('toggleIsRead', event)
            this.$emit('toggleIsRead', event)
        },
    },
    computed: {
    },
    created(){
    },
    watch: {
        emailFolder() {
        }
    },
    // etc.
    components: {
        EmailPreview,
    },
}