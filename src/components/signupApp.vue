<template>
<img class='logo' alt="Vue logo" src="../assets/RestoLogo.png">
<h2>Restaurant</h2>
    <div class='register'>
        <input type='text' v-model="name" placeholder="Enter name">
          <input type='text' v-model="email" placeholder="Enter email">
            <input type='password' v-model="password" placeholder="Enter Password">
           <button @click="signup">Sign up</button>
    </div>
    <p><router-link to='/login'> Login</router-link></p>
</template>

<script>
import axios from 'axios'
    export default {
        name:'signupApp',
        data()
        {
            return{  name:'',
                email:'',
                password:''
            }
        },
        methods:{
            async signup()
            {
                //console.warn('Signup clicked',this.name,this.email,this.password)
                let result= await axios.post("http://localhost:3000/users",{
                email:this.email,
                password:this.password,
                name:this.name});
                console.warn(result)
                if(result.status===201)
                {
                    //alert('Sign up done')
                    localStorage.setItem('user-info',JSON.stringify(result.data))
                    this.$router.push({name:'homeComp'})
                }
                
            }
        },
        mounted()
        {
            let user=localStorage.getItem('user-info')
            if(user)
            {
                this.$router.push({name:'homeComp'})
            }
        }
    }
</script>

<style scoped>

</style>