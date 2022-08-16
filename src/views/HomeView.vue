<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
