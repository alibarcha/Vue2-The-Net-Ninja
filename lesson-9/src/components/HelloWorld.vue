<template>
      <!-- root element -->
  <div class="hello">

    <h2>Hellow components</h2>
    <p>{{title}}</p>
    <p>{{subtitle}}</p>

    <p>{{greet()}}</p>

    <button v-on:click="increment()">{{num}}</button>
    
  
    
    
   

  </div>
</template>

<script>
    // ---component javascript ---

export default {
  name: 'HelloWorld',
    // data
   data (){
     return {
       title:'title of vue',
       subtitle:'sub title',
       num:0
     }
   },

    // methods
   methods : {
     greet:function (){
       return "greeting...."
     },
     increment:function (){
      return this.num++
     }
   },

  //  computed
  computed : {

  }
   

}

</script>

<style scoped>
    /* ---- component styling ---- */


</style>
