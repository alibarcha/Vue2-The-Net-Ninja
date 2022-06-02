<template>
    <div id="add-blog">
        <h1>Add a New Blog Post</h1>
        <form action="">
            <label for="">Blog Title</label>
            <input v-model="title"  type="text" required>
            <!-- <input v-model.lazy="title"  type="text" required> -->
            <label for="">Blog Content</label>
            <textarea v-model="content" name="" id=""></textarea>
            <!-- <textarea v-model.lazy="content" name="" id=""></textarea> -->
            <label for="">Check IT !</label>
            <input v-model="check" type="checkbox">
                <br><hr><br>
            <!-- checkboxes -->
            <div id="checkboxes">
                <label for="html">Html</label>
                <input type="checkbox" value="html" id="html"  v-model="blog.categories">
                <label for="css">css</label>
                <input type="checkbox" value="css" id="css"  v-model="blog.categories">
                <label for="javascript">javascript</label>
                <input type="checkbox" value="javascript" id="javascript"  v-model="blog.categories">
                <label for="vue">vue</label>
                <input type="checkbox" value="vue" id="vue"  v-model="blog.categories">
            </div>

            <!-- radios -->
            <div id="radios">
                <h4>Gender</h4>
                <label for="male">male</label>
                <input type="radio" value="male" id="male"  v-model="male">
                <label for="female">female</label>
                <input type="radio" value="female"  id="female" v-model="female">
            </div>
        </form>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title : {{title}} </p>
            <p>Blog content :{{content}} </p>
            <p>Checkout : {{check}}</p>

            <!-- categories -->
            <ul>
                <li v-for="category in blog.categories"  :key="category.id">{{category}}</li>
            </ul>

            <!-- radio binding -->
            <ul>
                <li >male : {{male}}</li>
                <li >female : {{female}}</li>
            </ul>

        </div>

    </div>
  
</template>

<script>
export default {
    name:'AddBlog',
    data (){
        return {
            title:'',
            content:'',
            check:false,
            blog:{
                categories:[],
            },
            male:true,
            female:true


            
        }
    },
    methods:{
      
    }

}
</script>

<style scoped>
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    word-break: break-all;
    
}
h3{
    margin-top: 10px;
}
/* checkboxes */
#checkboxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
#checkboxes input{
    margin-top: 10px;
}
#checkboxes label{
    display: inline-block;
    
    
}
ul{
    list-style: none;
}

</style>