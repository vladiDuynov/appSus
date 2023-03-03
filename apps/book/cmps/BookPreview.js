export default {
    props: ['book'],
    template: `
    <article class="book-preview">
        <img :src="book.thumbnail" alt="book-thumbnail">
        <h2><span>Title:</span> {{book.title}}</h2>
        <h2 class="price">{{formattedPrice}}</h2>
    </article>
    
    `,
    data() {
        return {
        }
    },
    methods: {},
    computed: {
        formattedPrice() {
            // console.log(this.book)
            const { amount, currencyCode } = this.book.listPrice
            return new Intl.NumberFormat('en', {style:'currency', currency:currencyCode}).format(amount)
        },
    },
    // created(){},
    // etc.
}