<template>

  <router-view />
</template>

<script>



export default {
  name: 'App',
  
 } 
</script>


<style>
body{
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.logo
{
  width:100px;
}
.register input,.addres input
{
    display:block;
    height:30px;
    padding-left:20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    
}
.register button .addres button
{
    height: 30px;    
    background: skyblue;
    color:aliceblue;
    border: 1px solid skyblue;
    cursor:pointer
} 

</style>
