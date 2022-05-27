<template>
    <!-- -- root element -- -->
  <div id="app">
      
    <HelloWorld />
    <!-- reusable component -->
    <HelloWorld />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  
  /* global styling for all */

}
</style>
