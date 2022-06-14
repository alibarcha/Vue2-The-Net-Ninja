<template>
    <div>
        <form action="">
            <label for="">Name</label>
            <input type="text" placeholder="Name" id="name">
            <label for="">Email</label>
            <input type="email" placeholder="Email" id="email">
            <label for="">Title</label>
            <input type="text" placeholder="Title" id="title">
            <label for="">Submit</label>
            <button v-on:click="postRequest" >Submit</button>
        </form>

    </div>
</template>

<script>
export default {
    name:'HttpForm',
    methods:{
        postRequest(){
        //    http request here

            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
            
                title: document.getElementById("name").value,
                body: document.getElementById("email").value,
                Title: document.getElementById("title").value,

                userId: 1
            }).then(function(data){
                console.log(data)

            })
        }
    }

}
</script>

<style scoped>
form{
    width: 50%;
    margin: 40px auto;
    border: 1px solid lightgreen;
    background: #eee;
    padding: 30px;
    display: flex;
    flex-direction: column;
}
input{
    margin:20px 0;
    padding: 10px;
}
button{
    margin-top: 20px;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
    background: lightgreen;
    border: 2px solid white;
    outline: 1px solid #222;
    cursor: pointer;
}


</style>