// import CMP from './'
export default {
    // props:[], 
    template: `
        <div class="mini-menu flex align-center" >
            <!-- <RouterLink to="/keep">
                <img src="assets/imgs/keep.png">
                <div>Keep</div>
            </RouterLink> -->
            <RouterLink to="/email/inbox">
                <img src="assets/imgs/gmail.png">
                <div>Email</div>
            </RouterLink>
            <RouterLink to="/books">
                <img src="assets/imgs/books.png">
                <div>Books</div>
            </RouterLink>
        </div>
    `,
    data(){return {

    }},
    methods:{},
    computed:{},
    // created(){},
    // etc.
    // components:{},
}