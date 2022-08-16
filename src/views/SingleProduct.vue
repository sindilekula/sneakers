<template>
  <div v-if="product" class="container">
    <div v-for="item in product" :key="item.id" class="card shadow mb-3">
      <img :src="item.image" class="car-img mb-2" alt="Picture of product" />
      <div class="card-details">
        <h5 class="text-black">Brand: <span>{{ item.name }}</span></h5>
        <p class="text-secondary">
          {{ item.catergory }}
        </p>
        <p>{{ item.descriptions }}</p>
        <p>Price: <span>R{{ item.price }}</span></p>
        <button @click="addToCart(item)" class="btn btn-lg rounded-pill ms-1">
          <i class="fa-solid fa-cart-arrow-down"></i>
          <span class="btn2">Add</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product.id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("updateCart", product);
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* height: 100vh; */
}

a {
  text-decoration: none;
}

.card {
  color: black;
  width: 50%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
}

.card p {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#products {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.car-img {
  height: 275px;
  aspect-ratio: 1;
}

button.btn {
  background-color: crimson;
  color: black;
  height: 40px;
  padding: 5px;
  text-align: center;
  margin-bottom: 5px;
}

button.btn:hover {
   background-color: black;
  color: crimson 
}

@media screen and (max-width: 800px) {
  .card {
    width: 100%;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 400px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}
</style>
