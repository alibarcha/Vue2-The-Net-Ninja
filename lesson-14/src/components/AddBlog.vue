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
        </form>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title : {{title}} </p>
            <p>Blog content :{{content}} </p>
            <p>Checkout : {{check}}</p>

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
            check:false

            
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

</style>