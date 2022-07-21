<template>
    <div  id="show-blog">
        <h1>All Blog Articles </h1>
        <input type="text" placeholder="Search Blog" v-model="search">
       
        <div v-for="blog in filteredBlogs"  :key="blog.id" class="single-blog">
            <!-- custom directive -->
            <router-link v-bind:to="'/blog/'+ blog.id"><h2 v-rainbow>{{blog.title}}</h2></router-link>
            
            <article v-color>{{blog.content}}</article>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'ShowBlog',
    data (){
        return {
            blogs:[],
            search:''
        }

    },
    methods:{

    },
    created(){
        this.$http.get('https://my-vue-app-3ca31-default-rtdb.firebaseio.com/posts.json').then(function(data){
           return data.json();
           
        }).then(function(data){
            var blogsArray=[];
            for(let key in data){
                data[key].id=key;
                blogsArray.push(data[key])

            }
            this.blogs=blogsArray;

        })

        
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    },

    // local filters only used in this component
    filters:{
        'upper':function(val){
            return val.toUpperCase()
        }
    },
    filters:{
        Upper(val){
            return  val.toUpperCase()
        }
    },


    // local custom Directives only used in this component

    // directives:{
    //     'color':{
    //         bind(el,binding){
    //             el.style.color="red"
    //         }
    //     }
    // },

    directives:{
        'rainbow':{
            bind(el,binding){
                el.style.color="#"+ Math.random().toString(10).slice(2,8)
            }
        },
          'color':{
            bind(el,binding){
                el.style.color="#222";
            }
        }

    },
   

}
</script>

<style scoped>
h1{
    text-align: center;
    text-decoration: underline;
}
.single-blog{
    width: 60%;
    background: #eee;
    padding: 10px 20px;
    margin: 20px auto;
}
input{
    width: 60%;
    margin: 10px auto;
    display: block;
    padding: 12px;
}

</style>