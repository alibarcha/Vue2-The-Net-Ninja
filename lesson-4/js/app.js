
new Vue({
    el:'#vue-app',

    data:{
        name:'vue',
        age:20,
        a:0,
        b:0,
        firstName:'william',
        lastName:'son',
        title:'Evon You is founder of Vue'


    },

    methods:{
        /*
        addToA:function (){
            // console.log("add to a")
            return this.age+this.a
        },
        addToB:function (){
            // console.log("add to a")
            return this.age + this.b
        },
        */
        },

        // computed properties are used for to calculate havy functions and calculation for complex calculation
        computed:{
            addToA:function (){
                // console.log("add to a")
                return this.age+this.a
            },
            addToB:function (){
                // console.log("add to a")
                return this.age + this.b
            },
            fullName:function (){
                return `${this.firstName} ${this.lastName}`
            },

            reverse:function(){
                return this.title.toUpperCase()
                // return this.title.length
                // return this.title.length
               
            }
        }
    
});