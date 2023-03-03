export default {
    template: `
        <section class="home-page">
            <h1>Welcome to Appsus</h1>
            <h2>One place to access all your apps</h2>
            
            <div class="link-group flex align-center">
                <RouterLink to="/keep">
                    <img src="../assets/imgs/keep.png">
                    Keep ** IN DEV **
                </RouterLink>
                <RouterLink to="/email/inbox" >
                    <img src="../assets/imgs/gmail.png">
                    Email
                </RouterLink>
                <RouterLink to="/books" >
                    <img src="../assets/imgs/books.png">
                    Books
                </RouterLink>
            </div>

        </section>
    `,
    created(){
        this.$emit('showMain')
    },
    methods: {
    },
    components: {}
}
