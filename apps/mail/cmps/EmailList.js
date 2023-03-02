import { emailService } from '../services/email.service.js'
import EmailPreview from './EmailPreview.js'


export default {
    props: ['emails'],
    template: `
    <section class="email-list flex flex-column">
        <div class="emails-sort flex align-center">
            Sort by
                <button @click="setSort('date')" :class="isDSelected">Date Sent</button>
                <button @click="setSort('subject')" :class="isSSelected">Subject</button>
        </div>
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
        return {
            sortBy: 'date',
            isDateSelected: true,
            isSubSelected: false,
        }
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
        setSort(sortBy) {
            console.log('set sort', sortBy)
            if (sortBy === 'date') { this.isSubSelected = false; this.isDateSelected = true }
            if (sortBy === 'subject') { this.isSubSelected = true; this.isDateSelected = false }
            
            this.$emit('setSort', sortBy)
        },
    },
    computed: {
        isDSelected(){
            return this.isDateSelected ? 'selected' : ''
        },
        isSSelected(){
            return this.isSubSelected ? 'selected' : ''
        }
    },
    created() {
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