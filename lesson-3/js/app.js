
// vue instance 

new Vue({
    el:'#vue-app',
    data:{
        tasks:['html','css','javascript','vue','react'],
        title:'comming soon vue js',
        age:30,
        num:90,
        add:0,
        year:2022,
        x:0,
        y:0
    },
    methods:{
        /*
          alert:function(){
               alert("Alert Event Triger")
        }*/

        increment:function(){
            this.age++
        },
        // mousemove function
        mousemove:function(event){
           console.log(event)
           this.x=event.offsetX;
           this.y=event.offsetY;
        },
        alert:function(){
            alert("You clicked me..")
        },
        logname:function(){
            console.log("you enter your name")
           
        },
        logpass:function(){
            console.log("you enter pass")
        }
    }
});