<template>

    <div>
        <!-- <slot name="title"></slot> -->
        <!-- <slot name="title"></slot>
        <h1>I am a Form Helper</h1>
        <slot name="text"></slot> -->

        <h1>Please fill out our form</h1>
        <form action="">
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-fields">
                <slot name=form-fields></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>

            <div id="useful-links">
                <ul>
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">link 2</a></li>
                    <li><a href="#">link 3</a></li>
                    <li><a href="#">link 4</a></li>
                </ul>
            </div>

        </form>
        

    </div>
  
</template>

<script>
export default {
    name:'FormHelper',
    data (){
        return {
          

        }
    },
    methods :{

    },
    computed:{

    }

}
</script>

<style scoped>
h1{
    text-align: center;
}
form{

    background: #eee;
    width: 70%;
    margin: 30px auto;
    text-align: center;
   padding: 15px;
}
input{
    width: 50%;
    padding: 10px;
    margin: 10px 0;
    background: transparent;
    border:1px solid lightgreen ;
    outline: none;
}
button{
    padding: 10px 20px;
    background: lightgreen;
    border: none;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    margin: 10px;

}
ul{
    list-style: none;
}
ul li{
    padding: 10px;
}
p{
    color: green;
}

</style>