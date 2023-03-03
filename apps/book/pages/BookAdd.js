import { bookService } from '../services/book.service.js'
import { googleBooksService } from '../services/google-books.service.js'

export default {
    template: `
    <section class="book-add flex column">
        <form >
            <input type="text" v-model="keyword" @input="processedInput" placeholder="Search a book title">
            <!-- @submit.prevent="getBooks"<button>Go</button> -->
        </form>
        <h1 v-if="books">Google Books Results : </h1>
        <ul v-if="books" class="google-book-list flex column">
            <li v-for="book in books" class="flex space-between">
                {{book.title}}
                <button @click="addBook(book)">+</button>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            keyword: '',
            books: null,
            processedInput: this.debounce(() => this.getBooks(), 1000),
        }
    },
    methods: {
        debounce(func, wait) {
            console.log('func:', func, 'wait:', wait)
            let timeout

            return (...args) => {
                const later = () => {
                    clearTimeout(timeout)
                    console.log('args:',args)
                    func()
                }
                clearTimeout(timeout)
                timeout = setTimeout(later, wait)
            }
        },
        getBooks() {
            googleBooksService.query(this.keyword)
                .then(books => this.books = books)
        },
        addBook(book) {
            bookService.addGoogleBook(book)
            // .then(book=>)
        },
    },
    computed: {},
    created() { },
    components: {
        googleBooksService,
    },
}