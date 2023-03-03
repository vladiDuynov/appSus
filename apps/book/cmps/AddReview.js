import RatingSurvey from './RatingSurvey.js'
import RatingBySelect from './RatingBySelect.js'
import RatingByTextBox from './RatingByTextBox.js'
import RatingByStars from './RatingByStars.js'

export default {
    props: ['book'],
    template: `
    <section class="add-review">
        <h1>Leave a review</h1>
        <form class="review-form flex column" @submit.prevent="addReview(book, review)">
            <label>
                <input type="text" v-model="review.userName" placeholder="Your Name">
            </label>
            <RatingSurvey @setSurveyAns="setRatingMethod"/>
            <RatingBySelect v-if="ratingMethod==='Select'"/>
            <RatingByTextBox v-if="ratingMethod==='TextBox'"/>
            <RatingByStars v-if="ratingMethod==='Stars'"/>
            <label for="date">When did you read this book ?</label> 
            <input type="date" id="date" v-model="review.date">
            <button>Send</button>
        </form>
    </section>
    `,
    data() {
        return {
            review: {
                id: '',
                userName: '',
                // rating: '',
                date: ''
            },
            ratingMethod:'select'
            // book: null,
        }
    },
    methods: {
        addReview(book, review) {
            this.$emit('addedReview', { book, review })
        },
        setRatingMethod(method) {
            console.log(method)
            this.ratingMethod = method
        }
    },
    computed: {},
    components: {
        RatingSurvey,
        RatingBySelect,
        RatingByTextBox,
        RatingByStars,
    }
}