<template>
    <h1 class="heading">Our Products</h1>
    <div class="functions">
        <button class="btn rounded-pill ms-2" @click="sortProducts">
        Sort By Price
        </button>
        <button class="btn rounded-pill ms-2" @click="sortProduct">
        Sort By Name
        </button>
     <input class="ms-5 mt-5" type="text" v-model="search" placeholder="Search" />
        <select v-model="brand" class="ms-3">
          <option value="all">All</option>
          <option value="adidas">Adidas</option>
          <option value="nike">Nike</option>
          <option value="puma">Puma</option>
          <option value="vans">Vans</option>
          <option value="jordan">Jordan</option>
        </select>
    </div>
    <div class="products">
        <div class="cards" v-for="product in Products" :key="product.product_id">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" />
        <p class="py-2">R{{ product.price }}</p>
        <p class="py-2">{{ product.descriptions }}</p>
            <router-link :to="{ name: 'singleview', params: { id: product.product_id} }">
                <button class="btn btn-lg rounded-pill ms-2">
                    More Details
                </button>
            </router-link>
        <button @click="addToCart(product)" class="btn btn-lg rounded-pill ms-2">
            <i class="fa-solid fa-cart-arrow-down"></i>
            <span class="btn2 ms-1">Add</span>
        </button>
        </div>
        <ProductCard v-for="product of filteredProducts" :key="product.product_id" :product="product" />
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "@/components/ProductCard.vue"
export default {
  name: "HomeView",
  // props: [id],
  data() {
    return {
        search: "",
        brand: "all",
    };
  },
    components: {
      ProductCard,
    },
  computed: {
    Products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.name?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (product.brand !== this.brand) isMatch = false;
        return isMatch;
      });
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    getProduct() {
      this.$store.dispatch("getProduct");
    },

    ...mapActions(["getProduct"]),
    sortProducts() {
      this.$store.commit("sortProductsByPrice");
    },
    sortProduct() {
      this.$store.commit("sortProductsByName");
    },
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
  },
};

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.heading {
    color: crimson;
    margin-bottom: 20px;
}
.active {
  display: none;
}
.products {
  display: flex;
  flex-wrap: wrap;
  margin: 45px;
  padding: 20px;
}

.functions {
  border: solid 1px white;
  width: 400px;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* margin: 20px; */
  padding: 10px;
}

.cards {
  color: crimson;
  border: solid 2px white;
  width: 300px;
  height: 400px;
  margin: 20px;
  padding: 5px;
}

.cards:hover {
  background-color: white;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
  box-shadow: 10px 5px 10px 5px crimson;
}

img {
  width: 200px;
  height: 200px;
}

button.btn {
  background-color: crimson;
  color: black;
  height: 40px;
  padding: 5px;
  text-align: center;
}

button.btn:hover {
   background-color: black;
  color: crimson 
}

input, select {
    background-color: crimson;
    color: white;
}
</style>
