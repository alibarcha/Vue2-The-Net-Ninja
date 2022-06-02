<template>
    <header>
        <small>Events in vue</small>
       <h2 >Title:{{title}}</h2> 
        <button id="btn" v-on:click="changeTitle">Change title</button>
    </header>
   
  
</template>

<script>
export default {
    name:'HeaderArea',
    data (){
        return {
            title: 'Vue Net Ninjas'
        }
    },
    methods:{
        changeTitle: function (){
            this.title="The Net Ninja Vue"
        }

    },
    computed:{

    }

}
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 16px;
}
h2{
    color: #222;
    text-align: center;
}
#btn{
    text-transform: capitalize;
    color: #222;
    background: white;
    border:none;
    border-radius: 5px;
    padding: 9px ;
    font-size: 18px;
}
#btn:hover{
    background: #222;
    color: lightgreen;
}


</style>