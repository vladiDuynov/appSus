// import CMP from './'
export default {
    props: ['email'],
    template: `
    <article class="email-preview flex align-center " :class="isRead"  @mouseover="onHover" @mouseleave="onOut">
        <div class="checkboxes flex justify-center">
            <input type="checkbox" class="selection">
            <input type="checkbox" class="star">   
        </div>

        <div class="email-from">{{email.from}}</div>

        <div class="email-subject-body">
            <span class="subject">{{email.subject}}</span> - {{email.body}}
        </div>
        
        <div v-if="!isHovering" class="email-sentAt">{{date}}</div>

        <div v-if="isHovering" class="btns">
            <button @click.stop="remove">
                <img src="assets/imgs/trash.png">
            </button>
            <button @click.stop="toggleIsRead">
                <img :src="isReadUrl">
            </button>
        </div>
    </article>

    
    `,
    data() {
        return {
            isHovering: false,
        }
    },
    methods: {
        onHover() { // hide date show btns
            this.isHovering = true
        },
        onOut() {
            this.isHovering = false
        },
        remove() {
            // console.log('removing?', this.email.id)
            this.$emit('remove', this.email.id)
        },
        toggleIsRead() {
            console.log('toggleIsRead', this.email.id)
            this.$emit('toggleIsRead', this.email.id)
        },
    },
    computed: {
        isRead() {
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
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                // hour12: false,
            }
            return new Intl.DateTimeFormat('en', option).format(date)
        },
        isReadUrl() {
            return this.email.isRead ? 'assets/imgs/envelope.png' : 'assets/imgs/markread.png'
        }
    },
    // created(){},
    // etc.
    // components:{},
}