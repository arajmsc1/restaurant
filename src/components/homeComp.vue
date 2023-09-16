<template>
  <headerComp />

  <h1>Hello ,{{ name }} Welcome on home page</h1>

  <table border="1" cellspacing="0" cellpadding="0">
    <tr>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Id</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurantlist" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.id }}</td>
      <td>
        <router-link :to="'/update-res/' + item.id">Update</router-link>
        <button @click="DeleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import headerComp from "./headerComp.vue";
import axios from "axios";
export default {
  name: "homeComp",
  data() {
    return {
      name: "",
      restaurantlist: [],
    };
  },
  methods: {
    async DeleteRestaurant(id) {
      console.warn(id);
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      console.warn(result);
      if (result.status == 200) this.loaddata();
    },
    async loaddata() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "signupApp" });
      }
      this.name = JSON.parse(user).name;
      let result = await axios.get("http://localhost:3000/restaurant");
      console.warn(result);
      this.restaurantlist = result.data;
    },
  },
  components: { headerComp },
  async mounted() {
    this.loaddata();
  },
};
</script>

<style scoped>
td {
  width: 160px;
  height: 40px;
}
</style>