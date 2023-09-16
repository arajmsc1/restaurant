<template>
<headerComp />
  <div>
    <h1>Hello , Welcome on update Restaurant page</h1>
  </div>
  <form class="addres">
    <input
      type="text"
      placeholder="Enter Name"
      name="name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      placeholder="Enter address"
      name="address"
      v-model="restaurant.address"
    />
    <input
      type="number"
      placeholder="Enter contact"
      name="contact"
      v-model="restaurant.contact"
    />
    <button type="button" @click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import headerComp from "./headerComp.vue";
import axios from 'axios'
export default {
  name: "updateRes",
  components: { headerComp },
  data() {
    return {
      restaurant: { name: "", address: "", contact: "" },
    };
  },
  methods:{
    async updateRestaurant()
    {
      console.warn(this.restaurant)
      let result= await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,
      this.restaurant)
      //console.log(result)
      if(result.status==200)
      {
        this.$router.push({name:'homeComp'})
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signupApp" });
    }
    //console.warn(this.$route.params.id)
    let id=this.$route.params.id
    let result= await axios.get('http://localhost:3000/restaurant/'+id)
    //console.warn(result.data.length)
    //this.restaurant=result.data
    if(result.status==200 )//&& result.data.length>0)
    {
      console.warn(result.status)
      //this.restaurant=JSON.stringify(result.data);
      this.restaurant=result.data
      //console.warn(this.restaurant)
    }

  },
};
</script>

<style scoped>
</style>