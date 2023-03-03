export default {
    // props:[], 
    template: `
    <label for="rating">Rate this book : 
        <select class="rating" id="rating" v-model="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </label>
    `,
    data() {
        return {
            rating:''
        }
    },
    methods: {},
    computed: {},
    // created(){},
    // etc.
    // components:{},
}