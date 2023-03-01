// import CMP from './'
export default {
    props: ['email'],
    template: `
    <article class="email-preview flex align-center " :class="isRead">
        <!-- <div class="flex align-center"> -->
            <div class="checkboxes flex justify-center">
                <input type="checkbox" class="selection">
                <input type="checkbox" class="star">   
            </div>

            <div class="email-from">{{email.from}}</div>
            <div class="email-subject-body"><span class="subject">{{email.subject}}</span> - {{email.body}}</div>
        <!-- </div> -->
        
        <div class="email-sentAt">{{date}}</div>
        <!-- <div class="btns">

        </div> -->
    </article>
    `,
    data() {
        return {

        }
    },
    methods: {},
    computed: {
        isRead(){
          return this.email.isRead ? '' : 'unread'  
        },
        body() {
            return this.email.body.slice(0, 20)
        },
        date() {
            const date = new Date(this.email.sentAt)
            // return `${date.getMonth()} ${date.getDay()}`            

            const option = {
                month: 'short',
                day: 'numeric'
            }
            return new Intl.DateTimeFormat('en', option).format(date)
        }
    },
    // created(){},
    // etc.
    // components:{},
}