import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// ***************global filters***************

Vue.filter('upper',function(val){
  return val.toUpperCase()
})

Vue.filter('snippet',function(value){
  return value.slice(0,120)+'...'

})
// ****************** routing *****************

// import router pakage
import VueRouter from 'vue-router'

// import pages
import ShowBlog from './Views/ShowBlog'
import AddBlog from './Views/AddBlog'

Vue.use(VueRouter)

const routes=[
  {path:'/' , component:ShowBlog},
  {path:'/add' , component:AddBlog},
]

const router=new VueRouter({
  routes
})


Vue.use(VueResource);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
 
}).$mount('#app')
