<template>
  <div id="singleBlog">
    <h2> {{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <p>Author:{{blog.author}}</p>
    <p>categories:</p>
    <ul>
      <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'SingleBlog',
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){ 
        this.$http.get('https://my-vue-app-3ca31-default-rtdb.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
          this.blog=data;

        });

    }

}
</script>

<style scoped>
 #singleBlog{
      width: 60%;
    background: #eee;
    padding: 10px 20px;
    margin: auto;
    text-align: center;

 }

</style>