const { createApp } = Vue
import { router } from './routes.js'
import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'
import UserMsg from './cmps/UserMsg.js'

const options = {
    template: `
        <section>
            <AppHeader v-show="false"/>
            <RouterView />
            <AppFooter v-show="false"/>
            <UserMsg />
        </section>
    `,
    data() {
        return {

        }
    },
    components: {
        AppHeader,
        AppFooter,
        UserMsg,
    },
    copmuted: {
        isShown() {
            return false
        },
    }
}

const app = createApp(options)
app.use(router)
app.mount('#app')
