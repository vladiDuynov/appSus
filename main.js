const { createApp } = Vue
import { router } from './routes.js'
import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'
import UserMsg from './cmps/UserMsg.js'

const options = {
    template: `
        <section>
            <AppHeader v-if="isMain"/>
            <RouterView @hideMain='hideMain' @showMain="showMain" />
            <AppFooter v-if="isMain"/>
            <UserMsg />
        </section>
    `,
    data() {
        return {
            isMain: false,
        }
    },
    components: {
        AppHeader,
        AppFooter,
        UserMsg,
    },
    methods: {
        hideMain(){
            this.isMain = false
        },
        showMain(){
            this.isMain = true
        }
    },
    created() {
        this.isMain = true
    },
    // unmounted() {
    //     this.isMain = false
    // }
}

const app = createApp(options)
app.use(router)
app.mount('#app')
