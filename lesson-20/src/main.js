import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// custom directives
Vue.directive('rainbow',{
  bind(el){
    el.style.color="red"
    el.style.background="green"
    
  }
})

// custom directives two
Vue.directive('randomColor',{
  bind(el){
    el.style.color="#"+Math.random().toString().slice(2,8)
  }
})

Vue.directive('theme',{
  bind(el,binding){
    if(binding.value=='wide'){
      el.style.maxWidth="1200px"

    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
