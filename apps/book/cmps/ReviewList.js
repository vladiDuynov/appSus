import ReviewPreview from './ReviewPreview.js'

export default {
    props: ['reviews'],
    template: `
    <section class="review-list">
        Reviews of this book
        <ul class="flex column">
            <li v-for="review in reviews" :key="review.id" class="review flex space-between">
                <ReviewPreview :review="review"/>
                <button @click="onRemove(review.id)">Delete</button>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {}
    },
    methods: {
        onRemove(reviewId) {
            this.$emit('remove', reviewId)
        },
    },
    computed: {},
    components: {
        ReviewPreview,
    }
}