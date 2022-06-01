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
            link:'https://www.youtube.com/watch?v=6-us2D7GQCk&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=24',

        }
    },
    methods:{

    },
    computed:{

    }

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
    color: white;
}
p a:hover{
    color: lightgreen;
}

</style>