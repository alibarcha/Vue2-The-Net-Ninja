<template>
  <!-- -- root element -- -->
  <div id="app">
    <form-helper>
      <!-- sloat.. -->
      
      <!-- <h2 slot="title">it is a sloat title</h2>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I am a paragraph of slot text..</p>
      <p slot="text">{{subTitle}}</p> -->

        <!-- form -->
        <div slot="form-header">
          <h3>This is a title of form</h3>
          <p>information about form</p>
        </div>

        <div slot="form-fields">
          <input type="text" name="" id="" placeholder="Name" required><br>
          <input type="password" name="" id="" placeholder="password" required>
        </div>

        <div slot="form-controls">
          <button v-on:click="handleSubmit">submit</button>
        </div>
      
    </form-helper>
   

    
    
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
  name: "App",
  components: {
  'form-helper':FormHelper,

},
 data(){
   return {
     title:'This is dynamic sloat title',
     subTitle:"this is dynamic slot paragraphy.."
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
