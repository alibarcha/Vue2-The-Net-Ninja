
// --------- components in vue ---------
/*
vue.component('greet',{

    data:{
        name:"william son .."


    },
    methods:{


    }

});
*/



// ---------- vue instance one ---------
let one=new Vue({
    el:'#vue-app1',
    data:{
        title:'vue instance first title :)'

    },
    methods:{

    },
    computed:{
        greet:function(){
            return "App vue first Ins.."
        }

    }
});

// ---------- vue instance second ---------
let two=new Vue({
    el:'#vue-app2',
    data:{
        title:'vue instance title second :)'

    },
    methods:{

    },
    computed:{
        greet:function(){
            return 'App vue second Ins..'
        },

        // change title one 
        changeTitle:function(){
            one.title="This is new title of vue one  , change title by using vue instancr 2.."
        }

    }
});

// change title name
two.title="new second instance..."