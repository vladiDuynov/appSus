// import CMP from './'
export default {
    // props:[], 
    template: `
        <header  class="header ">
            <div class="logo flex align-center">
                <img src="../../assets/imgs/gmail.png">
                <span>Emails</span>
            </div>
            <input type="text" placeholder="Search" v-model="keyword" @change="searchVal">
            <div class="action-buttons flex align-center">
                <button>A</button>
                <button>B</button>
                <button>C</button>
            </div>
        </header>
    `,
    data() {
        return {
            keyword:'',
        }
    },
    methods: {
        searchVal(){
            console.log(this.keyword) // connected
        }
    },
    computed: {},
    // created(){},
    // etc.
    // components:{},
}