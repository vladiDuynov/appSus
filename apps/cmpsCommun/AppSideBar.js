// import CMP from './'
export default {
    props: {
        folders: {
            type: Array,
            required: true,
        },
        isEmail: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    // props:['folders', 'isEmail'], 
    template: `
    <section class="side-bar flex-column">
        
        <button v-if="isEmail" class="compose-email-btn flex align-center" @click="composeEmail">
            <img class="icon-pencil" src="../../assets/imgs/pencil-tool.png">
            Compose
        </button>
        <ul>
            <li v-for="folder in folders" @click="setFilterBy(folder.title)">
               <img :src="folder.iconUrl">
               <span>{{folder.title}}</span>  
            </li>
        </ul>
    </section>
    `,
    data(){
        return {    }
},
    methods:{
        composeEmail(){
            console.log('open composer')
            this.$emit('openComposer')
        },
        setFilterBy(folderTitle){
            console.log(folderTitle)
        }
    },
    computed:{},
    // created(){},
    // etc.
    // components:{},
}