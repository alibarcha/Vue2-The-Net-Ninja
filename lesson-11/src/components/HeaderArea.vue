<template>
    <header>
       <h2>{{title}}</h2> 
    </header>
   
  
</template>

<script>
export default {
    name:'HeaderArea',
    data (){
        return {
            title: 'Vue Ninjas'
        }
    },
    methods:{

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


</style>