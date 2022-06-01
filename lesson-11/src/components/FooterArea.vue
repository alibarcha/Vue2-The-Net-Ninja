<template>
    <footer>
        <p><a v-bind:href="link">{{copyright}}</a> </p>
        <h3>props name :{{name}}</h3>
        <h5>{{name}}</h5>
    <ul>
        <li v-for="user in users" :key="user.name">{{user.name}}</li>
    </ul>
    </footer>

  
</template>

<script>
export default {
    name: 'FooterArea',
    data (){
        return {
            copyright:'Copyright 2022 The Net Ninja',
            link:'https://www.youtube.com/watch?v=6-us2D7GQCk&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=24',

        }
    },
    methods:{

    },
    computed:{

    },
    props:['name','users'],
  

}
</script>

<style scoped>
footer{
    background-color: #eee;
    padding: 15px;
}
p{

    text-align: center;
}
p a{
    color: lightgreen;
}
p a:hover{
    color: #222;
}

</style>