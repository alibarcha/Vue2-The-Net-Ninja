<template>
  <div id="add-blog">
    <h1>Add a New Blog Post</h1>
    <form v-if="! submitted">
      <label for="">Blog Title</label>
      <input v-model.lazy="blog.title" type="text" name="title" required />
      <!-- <input v-model.lazy="title"  type="text" required> -->
      <label for="">Blog Content</label>
      <!-- <textarea v-model="content" name="content" id="" required></textarea> -->
      <textarea v-model.lazy.trim="blog.content" name="" id=""></textarea>
      <label for="">Check IT !</label>
      <input v-model="check" type="checkbox" />
      <br />
      <hr />
      <br />
      <!-- checkboxes -->
      <div id="checkboxes">
        <label for="html">Html</label>
        <input
          type="checkbox"
          value="html"
          id="html"
          v-model="blog.categories"
        />
        <label for="css">css</label>
        <input type="checkbox" value="css" id="css" v-model="blog.categories" />
        <label for="javascript">javascript</label>
        <input
          type="checkbox"
          value="javascript"
          id="javascript"
          v-model="blog.categories"
        />
        <label for="vue">vue</label>
        <input type="checkbox" value="vue" id="vue" v-model="blog.categories" />
      </div>

      <!-- select Box binding -->
      <label>Author</label>
      <select v-model="blog.authors">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title : {{ blog.title }}</p>
      <p>Blog content :{{ blog.content }}</p>
      <p>Checkout : {{ check }}</p>

      <!-- categories -->
      <ul>
        <li v-for="category in blog.categories" :key="category.id">
          {{ category }}
        </li>
      </ul>
      <!-- select binding -->
      <p>Author : {{ blog.authors }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
     
      blog: {
        check: false,
         title:'',
          content:'',
        categories: [],
        authors: "",
      },
      authors: ["The Net Ninja", "code with harry", "The vue instance"],
      submitted:false,
    }
  },
  methods: {

    post:function (){
      this.$http.post('https://my-vue-app-3ca31-default-rtdb.firebaseio.com/posts.json',this.blog).then(function(data){
        console.log(data)
        // alert("form submited")
        this.submitted=true
        
      })
    }
  }
};
</script>

<style scoped>
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  word-break: break-all;
}
h3 {
  margin-top: 10px;
}
/* checkboxes */
#checkboxes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
#checkboxes input {
  margin-top: 10px;
}
#checkboxes label {
  display: inline-block;
}
ul {
  list-style: none;
}
select{
    background: #eee;
    width: 60%;
    height: 20px;
    border: 1px solid  lightgreen;
    
}
option{
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    
}
button{
  display: block;
  padding: 9px;
  text-transform: uppercase;
  margin: 19px 0;
  background: lightgreen;
  border: 1px solid #222;
  cursor: pointer;
}
button:hover{
  background: #222;
  color: white;
}
</style>