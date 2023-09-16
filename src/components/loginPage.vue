<template>
<img class='logo' alt="Vue logo" src="../assets/RestoLogo.png">
  <h2>Login</h2>
  <div class="register">
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="login">Login</button>
  </div>
  <p><router-link to="/Sign-up"> Sign up</router-link></p>
</template>
<script>
import axios from 'axios'
export default {
  name: "loginPage",
  data()
  {
    return   {
        email:'',
        password:''
    }
  },
  methods:{
    async login()
    {
        console.warn(this.email,this.password)
        let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
        if(result.status==200 && result.data.length>0)
        {
            localStorage.setItem('user-info',JSON.stringify(result.data[0]))
           this.$router.push({name:'homeComp'})
        }
        console.warn(result)
    }

  }
};
</script>