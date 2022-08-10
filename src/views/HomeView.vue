<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <div class="products" v-for="product in Products" :key="product.id">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" />
      <p>{{ product.descriptions }}</p>
      <button @click="getProduct(product.product_id)">View</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    HelloWorld,
  },
  computed: {
    Products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    // getProduct() {
    //   this.$store.dispatch("getProduct");
    // },

    ...mapActions(["getProduct"]),
  },


};
</script>
