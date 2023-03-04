import { bookService } from '../services/book.service.js'

import BookFilter from '../cmps/BookFilter.js'
import BookList from '../cmps/BookList.js'
import BookDetails from '../pages/BookDetails.js'
import BookEdit from '../pages/BookEdit.js'
import { eventBusService } from '../services/event-bus.service.js'

export default {
    template: `
    <section class="book-index">
        <BookFilter @filter="setFilterBy"
        v-if="books && !isDetails && !isEditing" />
        <div class="btn-add-wrapper" >
            <button class="btn-add" @click="editBook" >Add a book</button>
        </div>
        <BookList 
            :books="filteredBooks" 
            v-if="books && !isDetails && !isEditing" 
            @remove="removeBook" 
            @showDetails="showDetails"
            @editBook="editBook"
             /> 
        <BookDetails
        :bookId="bookId"
        v-if="isDetails"
        @hideDetails="hideDetails"
        />
        <BookEdit
        :book="book"
        v-if="isEditing"
        @closeEdit="closeEdit"
        />
    </section>
    `,
    data() {
        return {
            books: null,
            filterBy: { title: '', listPrice: { amount: 0 } },
            isDetails: false,
            isEditing:false,
            bookId: '',
            book:''
        }
    },
    methods: {
        showDetails(bookId) {
            this.isDetails = true
            this.bookId = bookId
        },
        hideDetails() {
            this.isDetails = false
            this.bookId = ''
        },
        editBook(book){
            this.isEditing = true 
            this.book = book
        },
        closeEdit(){
            this.isEditing = false
            this.bookId = ''
        },
        removeBook(bookId) {
            bookService.remove(bookId) // function in service which calls storage's remove function
                .then(() => {
                    const idx = this.books.findIndex((book => book.id === bookId))
                    this.books.splice(idx, 1)
                    eventBusService.emit('show-msg', { txt: 'Book Removed', type: 'success' }) // emit = event launch
                })
                .catch(err => {
                    eventBusService.emit('show-msg', { txt: 'Book removal failed', type: 'error' })
                })
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i') // this defines that we don't differenciate uppercase and lowercase 
            // console.log(this.filterBy.listPrice.amount);
            var filteredBooks = this.books.filter(book => regex.test(book.title) && (book.listPrice.amount >= this.filterBy.listPrice.amount)) // test returns true or false in comparison of this.filterBy.title and book.title
            // console.log(filteredBooks)
            return filteredBooks
        }
    },
    created() { // RELATES TO DATA
        bookService.query()
            .then(books => {
                // console.log('books', books)
                this.books = books
            })
        // console.log('this.books', this.books)
    },
    mounted() { }, // RELATES TO DOM
    components: {
        BookFilter,
        BookList,
        BookDetails,
        BookEdit
    }
    // etc.
}