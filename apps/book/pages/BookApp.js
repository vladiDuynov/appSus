import AppHeader from '../cmps/AppHeader.js'
import AppFooter from '../cmps/AppFooter.js'
import UserMsg from '../cmps/UserMsg.js'
import BookIndex from './BookIndex.js'
// import BookAdd from './BookAdd'  x

export default {
    template: `
        <section class="book-app">
            <AppHeader/>  
            <main class="router-view">
            <RouterView/> 
            <!-- <BookIndex />
            <BookAdd/> -->
            </main>
            <AppFooter />
            <UserMsg/> <!-- is at the bottom so no pblms with z-indexs because last el in DOM wins -->
        </section>
    `,
    data() {
        return {}
    },
    // methods: {},
    // computed: {},
    components: {
        AppHeader,
        BookIndex,
        AppFooter,
        UserMsg,
        // BookAdd,
    },
    created(){
        this.$emit('hideMain')
    }
}