
// --- vue instance---
let app=new Vue({
    el:'#vue-app',

    // --- Data--- string,number,boolean,
    // data object
    data:{
        title:'Hellow Vue js',
        subTitle:'wellcome to our Vue js :> Data & Methods ',
        demo:'About Vue js',
        name:'William son',
        id:3829209,
        recommend:true,
        recommend:false,
        tasks:['html','css','javascript'],
        car:{name:'vitz',price:392092,model:22},
        url:'https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5'
    },

    // -------methods for functions  only functions in here------
    // method object
    methods:{
        // fun 1
        greet:function(){
            return "Wellcome barcha"
        },
        // fun 2
        time:function(key){
            return `Good ${key} ${this.name}`
        }

    }
});

// change data
// app.title="I have change data"