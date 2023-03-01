// import CMP from './'
export default {
    props:['folders'], 
    template: `
    <section class="side-bar">
        <ul>
            <li v-for="folder in folders">
               <img :src="folder.iconUrl">
               <span>{{folder.title}}</span>  
            </li>
        </ul>
    </section>
    `,
    data(){
        return {    }
},
    methods:{},
    computed:{},
    // created(){},
    // etc.
    // components:{},
}