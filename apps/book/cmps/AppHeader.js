export default {
    template: `
    <header class="app-header flex align-center space-between" :class="isOpen">
        <h1 class="logo"><RouterLink to="/">Miss Book</RouterLink></h1>
        <div class="btn-ham-menu" @click="toggleMenu"></div>
        <nav class="flex">
            <RouterLink to="/books">Books</RouterLink>
            <RouterLink to="/addBook">Add Book</RouterLink>
            <RouterLink class="home-link" to="/">
                <img src="../assets/imgs/home.png">
            </RouterLink>
        </nav>
    </header>
    `,
    data() {
        return {
            selected: 'HomePage',
            hambMenuOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.hambMenuOpen = !this.hambMenuOpen

        }
    },
    computed: {
        isOpen(){
            return this.hambMenuOpen ? 'hamb-menu-open' : ''
        }
    },
}