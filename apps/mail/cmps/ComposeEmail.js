// import CMP from './'
export default {
    // props:[], 
    template: `
        <section class="compose-email">
            <div class="compose-header flex align-center justify-between">
                <h1>New Email</h1>
                <button class="btn-close-composer" title="Discard email" @click="closeComposer">X</button>
            </div>
            
            <form class="composer-form flex flex-column" @submit.stop="sendEmail">
                <div class="to-container flex align-center">
                   <label for="input-to">
                    To 
                </label>
                <input type="email" required id="input-to" v-model="newEmail.to" placeholder="abc@appsus.com"> 
                </div>
                
                <input type="text" id="input-subject" v-model="newEmail.subject" placeholder="Subject">

                <textarea id="input-body" v-model="newEmail.body"></textarea>

                <button class="btn-send-email" >Send</button>
            </form>
        </section>
    `,
    data() {
        return {
            newEmail:{
                subject:'',
                body:'',
                from:'thisisme@appsus.com',
                to:'',
            }
        }
    },
    methods: {
        sendEmail(){
            console.log(this.newEmail)
            this.$emit('sendEmail', this.newEmail)
        },
        closeComposer(){
            this.$emit('closeComposer')
        }
    },
    computed: {},
    // created(){},
    // etc.
    // components:{},
}