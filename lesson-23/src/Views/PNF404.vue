<template>
  <div id="pnf">
        <h1>404</h1>
        <h3>File not found</h3>
        <p>The site configured at this address does not contain the requested file.</p>
        
        <p>If this is your site, make sure that the filename case matches the URL.
          For root URLs (like <small>http://example.com/</small> ) you must provide an index.html file.</p>
          
          <p> <a href="#" > the full documentation</a> for more information about using<b>GitHub Pages</b> .</p>
  </div>
</template>

<script>
export default {
    name:'PNF404',

}
</script>

<style scoped>
body{
    background: #eee;
}
h1{
    font-size: 40px;
    font-weight: 500;
}
#pnf{
    width: 50%;
    margin: 10px auto;
    text-align: center;

}
p{
    color: rgba(0, 0, 0, 0.5);
}

</style>