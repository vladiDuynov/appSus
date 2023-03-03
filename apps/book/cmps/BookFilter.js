export default {
    // props:[], 
    template: `
        <section class="book-filter flex align-center">
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search Title"
                type="text"/>
            <label class="filter-price">Minimum Price :</label>
            <input 
                v-model="filterBy.listPrice.amount"
                @input="filter" 
                min="0"
                max="200"
                type="range"/>
            <label v-if="filterBy">{{this.filterBy.listPrice.amount}}</label>
                
        </section>
    `,
    data() {
        return {
            filterBy: { title: '', listPrice: { amount: 0 } }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', {...this.filterBy}) // shallow copy for simple object - deep copy req for object nesting object/s or array/s
        }
    },
    computed: {},
    // created(){},
    // etc.
}