<template>
  <!-- -- root element -- -->
  <div id="app">
    <app-header></app-header>
    <!-- <HeaderArea/> -->
    <NinjaArea/>

    <FooterArea/>
   
  </div>
</template>

<script>
import  HeaderArea from "./components/HeaderArea.vue"
import FooterArea from "./components/FooterArea.vue"
import NinjaArea from "./components/NinjaArea.vue"



export default {
  name: "App",
  components: {
   'app-header': HeaderArea,
  // HeaderArea,
  FooterArea,
  NinjaArea,
   
},
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
