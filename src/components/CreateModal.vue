<template>
  <button @click="toggleModal">Add Product</button>
  <div v-if="active" class="mod">
    <form>
      <div>IMAGE</div>
      <input type="text" />
      <div>BRAND</div>
      <input type="text" />
      <div>DESCRIPTION</div>
      <input type="text" />
      <div>PRICE</div>
      <input type="text"  />
    </form>
    <button class="btn btn-lg rounded-pill ms-2" @click="createProduct()">Add</button>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    createProduct() {
      this.$store.dispatch("createProduct", {
 	    name: this.name,
		price: this.price,
		descriptions: this.descriptions,
        image: this.image,
		brand: this.brand,
      });
      
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style>
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
</style>

