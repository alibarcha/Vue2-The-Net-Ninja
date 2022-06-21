<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/"> Blogs</router-link></li>
        <li><router-link to="/add">Add a Blog</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderArea",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 16px;
  display: flex;
  justify-content: center;
}
ul {
  list-style: none;
  display: flex;
}
ul li {
  font-size: 15px;
  font-weight: bold;
  padding: 0 15px;
  cursor: pointer;
  text-decoration: none;
}
ul a {
  text-decoration: none;
}
.router-link-exact-active {
  background: white;
  padding: 10px;
  border-radius: 30px;
}
</style>