import EmailPreview from './EmailPreview.js'
export default {
    props:['emails'], 
    template: `
    <section class="email-list flex flex-column">
        <ul>
            <li v-for="email in emails" :key="email.id">

                <EmailPreview :email="email"/>

            </li>
            
        </ul>
    </section>
    `,
    data(){return {

    }},
    methods:{},
    computed:{},
    // created(){},
    // etc.
    components:{
        EmailPreview,
    },
}