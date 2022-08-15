<template>
  <body>
    <div class="wrapper">
      <h1>My Cart</h1>
        <div class="row">
            <div class="col-lg-8">
                <div class="box">
                    <div class="content">
                        <div class="cards" v-for="product in cartproducts" :key="product.id">
                            <img :src="product.image" class="mb-2" alt="food" />
                            <h3 class="ms-3">{{ product.brand }}</h3>
                            <p class="d-flex justify-content- gap-3">
                            <span class="ms-3">Subtotal: R{{ product.price }}</span>
                            </p>
                            <button @click="deleteFromCart(product.product_id)" class="btn btn-lg rounded-pill">
                            <i class="fa fa-trash"></i>
                            <span class="btn2">Remove</span>
                            </button>
                            <div class="right-bar">
                            <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <h5>CART SUMMARY</h5>
                    <div class="cart-details">
                        <!-- <p class="namecart"><span>Subtotal:</span> <span class="ms-5">R{{ calculatePrice }}</span></p>
                        <p><span>Shipping:</span> <span class="ms-5">Free shipping</span></p> -->
                        <div class="row">
                        <p>Subtotal:</p>
                        <p>Shipping:</p>
                        </div>
                        <div class="row">
                        <p>R{{ calculatePrice }}</p>
                        <p>Free shipping</p>
                        </div>
                    </div>
                    <router-link to="/checkout">
                        <button type="submit" class="btn btn-lg rounded-pill">Checkout</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
  </body>
</template>

<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  methods: {
    deleteFromCart(id) {
      return this.$store.dispatch("deleteFromCart", id);
    },
  },

  computed: {
    calculatePrice() {
      // console.log($store.state.currentValue)
      return this.$store.state.cart.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.price);
      }, 0);
    },
    cartproducts() {
      return this.$store.state.cart;
    },
    product() {
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
img {
    width: 150px;
    height: 150px;
}

.cards {
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 10px;
    border: solid 1px black;
    justify-content: space-between;
}

.card {
    margin: 20px;
    padding: 10px;
    border: solid 1px black;
}

.cart-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

button.btn {
    background-color: crimson;
    width: 150px;
    height: 50px;
}
</style>
