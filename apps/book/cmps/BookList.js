import BookPreview from './BookPreview.js'

export default {
    props: ['books'],
    template: `
    <section class="book-list">
        <ul>
            <li v-for="book in books" :key="book.id" class="flex column space-between">
                <BookPreview :book="book"/>
                <div class="btns flex space-evenly">
                    <button @click="showDetails(book.id)">Details</button>
                    <button @click="editBook(book)">Edit</button>
                    <button @click="onRemove(book.id)">Delete</button>
                </div>
            </li>
        </ul>
    </section>

    `,
    data() {
        return {}
    },
    methods: {
        onRemove(bookId) {
            this.$emit('remove', bookId)
        },
        showDetails(bookId){
            this.$emit('showDetails', bookId)
        },
        editBook(book){
            this.$emit('editBook', book)
        }
    },
    computed: {},
    components: {
        BookPreview,
    }
}