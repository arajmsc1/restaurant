<template>
  <headerComp />
  <div>
    <h1>Hello , Welcome on Add Restaurant page</h1>
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
    <button type="button" @click="addRestaurant">Add Restaurant</button>
  </form>
</template>

<script>
import headerComp from "./headerComp.vue";
import axios from "axios";
export default {
  name: "addRes",
  components: { headerComp },
  data() {
    return {
      restaurant: { name: "", address: "", contact: "" },
    };
  },
  methods: {
    async addRestaurant() {
      /*console.warn(
        this.restaurant.name,
        this.restaurant.address,
        this.restaurant.contact
      );*/
      let result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      console.warn(result);
      if(result.status==201)
      {
        this.$router.push({name:'homeComp'})
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signupApp" });
    }
  },
};
</script>

<style scoped>
</style>