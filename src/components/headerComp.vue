<template>
    <div class='nav'>
      <router-link to="/">Home</router-link>  
      <router-link to="/add-res">Add Restaurant</router-link>  
      
      <a @click="logout">Logout</a>  
    </div>
</template>
<script>
export default 
{
    name:'headerComp',
    methods:
    {
        logout()
        {console.warn('logout')
            localStorage.clear()
            this.$router.push({name:'loginPage'})
        }
    }
}
</script>

<style scoped>
.nav
{
    background-color: #1A1110;
    overflow: hidden;
}
.nav a {
    float:left;
    padding:14px 16px;
    color:aliceblue;
    margin-right: 5px;
    text-decoration: none;
    font-size: 16px;
}
.nav a:hover {
    background-color: whitesmoke;
    color: #333;
    font-weight: bold;
}
</style>