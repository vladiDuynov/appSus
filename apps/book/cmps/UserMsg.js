import { eventBusService } from "../services/event-bus.service.js"

export default {
    template: `
    <div class="user-msg flex column align-center space-evenly" :class="msg.type" v-if="msg">
        <p>{{msg.txt}}</p>
        <button @click="msg=null">OK</button>    
    </div>
    `,
    data() {
        return {
            msg: null,
        }
    },
    created() {
        this.unsubscribe = eventBusService.on('show-msg', (msg) => { // adding event listener
            console.log('Msg:', msg)
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 3000);
        })
    },
    unmounted(){
        // code never runs in this case
        this.unsubscribe() // means remove event listener when unmounted cmp
    }
}