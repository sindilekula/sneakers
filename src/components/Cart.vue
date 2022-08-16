<template>
  <body>
    <div class="wrapper">
      <h1 class="heading">My Cart</h1>
        <div class="row">
            <div class="col-lg-8">
                <div class="box">
                    <div class="content">
                        <div class="cards" v-for="product in cartproducts" :key="product.id">
                            <img :src="product.image" class="mb-2" alt="food" />
                            <div class="cart-content">
                                <h3 class="ms-5">{{ product.brand }}</h3>
                                <p class="d-flex justify-content- gap-3">
                                <span class="ms-5">Subtotal: R{{ product.price }}</span>
                                </p>
                                <button @click="deleteFromCart(product.product_id)" class="btn btn-lg rounded-pill ms-5">
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
.heading {
    color: crimson;
}

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

.cart-content {
    display: flex;
    flex-direction: row;
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
    /* height: 50px; */
}

button.btn:hover {
   background-color: black;
  color: crimson 
}

@media screen and (max-width: 630px) {
    .cart-content {
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 420px) {
    .cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
