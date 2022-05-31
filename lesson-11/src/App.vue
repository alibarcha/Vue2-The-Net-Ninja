<template>
  <!-- -- root element -- -->
  <div id="app">
      <h2>Props in Vue</h2>
      <!-- props here -->
    <footer-app name="william son" v-bind:users="users"></footer-app>
    
  </div>
</template>

<script>
import FooterArea from './components/FooterArea.vue'

export default {
  name: "App",
  components: {
 'footer-app':FooterArea,  
},
 data (){
   return {
     title:'vue js',
     users:[
       {name:'anil'},
       {name:'steve'},
       {name:'elon musk'},
     ]
   }
 },
 methods:{

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
