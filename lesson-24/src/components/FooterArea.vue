<template>
    <footer>
        <p><a v-bind:href="link">{{copyright}}</a> </p>
        
    </footer>

  
</template>

<script>
export default {
    name: 'FooterArea',
    data (){
        return {
            copyright:'Copyright 2022 The Net Ninja',
            link:'#',

        }
    },
    methods:{

    },
    computed:{

    },
    // life cycle hooks
    // beforeCreate(){
    //     alert("before")
    // },
    // created(){
    //     alert("created")
    // },
    // beforeMount(){
    //     alert("before")
    // },
    // mounted(){
    //     alert("mounted")
    // },
    // beforeUpdate(){
    //     alert("beforeupdate")
    // },
    // updated(){
    //     alert("updated")
    // }
   
  

}
</script>

<style scoped>
footer{
    background-color: #222;
    padding: 15px;
}
p{

    text-align: center;
}
p a{
    color: lightgreen;
}
p a:hover{
    color: white;
}

</style>