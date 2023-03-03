// import CMP from './'
export default {
    props:{
        txt:{
            type: String,
            required:true,
        },
        length: {
            type:Number,
            required:false,
            default:100,
        }
    },
    template: `
    <p>{{txtCut}}</p>
    <button v-if="length < txt.length" class="read-more" @click="toggle">{{compBtn}}</button>
    `,
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    },
    computed: {
        txtCut() {
            if (!this.isOpen && this.txt.length > this.length)
                return this.txt.slice(0, this.length) 
            return this.txt
        },
        compBtn() {
            return this.isOpen ? '...read less' : 'read more...'
        }
    },
    // created(){},
    // etc.
    // components:{},
}