<template>
  <div id="singleBlog">
    <h2> {{blog.title}}</h2>
    <article>{{blog.body}}</article>
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
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            this.blog=data.body;
        })

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