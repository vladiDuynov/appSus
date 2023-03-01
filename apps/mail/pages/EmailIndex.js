import AppHeader from '../../../apps/cmpsCommun/AppHeader.js'
import AppSideBar from '../../../apps/cmpsCommun/AppSideBar.js'
import EmailList from '../cmps/EmailList.js'

export default {
    // props:[], 
    template: `
    <section class="app-index">
        <AppHeader/>
        <AppSideBar/>
        <EmailList/>
    </section>
    
    `,
    data(){
        return {

    }},
    methods:{},
    computed:{},
    // created(){},
    // etc.
    components:{
        AppHeader,
        AppSideBar,
        EmailList
    },
}