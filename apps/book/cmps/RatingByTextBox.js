// import CMP from './'
export default {
    // props:[], 
    template: `
    <label for="rating">Rate this book :
        <input type="text" v-model="rating">
    </label>
    `,
    data(){return {
        rating:''
    }},
    methods:{},
    computed:{},
    // created(){},
    // etc.
    // components:{},
}