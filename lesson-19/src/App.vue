<template>
  <!-- -- root element -- -->
  <div id="app">
    
    
    <show-blog></show-blog>
  

   
   

  </div>
</template>

<script>
import ShowBlog from './components/ShowBlog.vue';


export default {
  name: "App",
  components: {
    'show-blog':ShowBlog
   
    


},
 data(){
   return {
     
   }
 }

};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap');
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

</style>
