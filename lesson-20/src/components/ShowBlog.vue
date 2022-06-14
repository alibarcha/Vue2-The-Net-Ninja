<template>
    <div  id="show-blog">
        <h1>All Blog Articles</h1>
        <div v-theme='wide' v-for="blog in blogs"  :key="blog.id" class="single-blog">
            <!-- custom directive -->
            <h2 v-rainbow>{{blog.title}}</h2>
            <article v-randomColor>{{blog.body}}</article>
            <small>{{blog.id}}</small>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShowBlog',
    data (){
        return {
            blogs:[]
        }

    },
    methods:{

    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs=data.body.slice(0,20)
            console.log(data)
           
        })
    }

}
</script>

<style scoped>
h1{
    text-align: center;
    text-decoration: underline;
}
.single-blog{
    width: 80%;
    background: #eee;
    padding: 10px 20px;
    margin: 20px auto;
}

</style>