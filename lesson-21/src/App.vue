<template>
  <!-- -- root element -- -->
  <div id="app">
    
    <h2>{{title | upper}}</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic, doloremque rem quasi voluptate aspernatur eos, repellat temporibus laboriosam voluptates, possimus iste fuga iure. Voluptatum laborum eius ipsam atque consequuntur.</p>
    <h3>{{subtitle | lower}}</h3>
  

   
   

  </div>
</template>

<script>



export default {
  name: "App",
  components: {
  
},
 data(){
   return {
     title:'This is a Title of Vue js',
     subtitle:'THIS IS SUBTITLE OF VUE JS'
     
   }
 },
//  local fieters
  filters:{
    upper:function(value){
      return value.toUpperCase()
    },
    lower:function(value){
      return value.toLowerCase()
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
