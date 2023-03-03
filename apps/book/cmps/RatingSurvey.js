// import RatingBySelect from './RatingBySelect.js'
// import RatingByTextBox from './RatingByTextBox.js'
// import RatingByStars from './RatingByStars.js'

export default {
    template: `
        <section>
            {{info.label}}
            <label v-for="cmp in info.components" >
                <input type="radio" :value="cmp" @change="setVal" v-model="val">
                <span>{{cmp}}&nbsp;&nbsp;&nbsp;</span>
            </label>
        </section>
    `,
    data() {
        return {
            val:null,
            type: 'linearScale',
            info: {
                label: 'Rating Method:',
                components: ['Select', 'TextBox', 'Stars']
            }
        }
    },
    methods: {
        setVal(){
            console.log('reportVal', this.val)
            this.$emit('setSurveyAns', this.val)
        }
    },
    computed: {},
    // created(){},
    // etc.
    components: {
        
    },
}