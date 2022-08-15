<template>
  <div class="functions">
    <button class="btn rounded-pill ms-2" @click="sortProducts">
      Sort By Price
    </button>
    <button class="btn rounded-pill ms-2" @click="sortProduct">
      Sort By Name
    </button>
  </div>

  <!-- <button onclick="diplayBasket()">CART</button>
  <div id="userCart">
    <button onclick="resetData()">CHECKOUT</button>
  </div> -->
  <div class="products">
    <!-- <h1>Products Page</h1> -->
    <div class="cards" v-for="product in Products" :key="product.id">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" />
      <p class="py-2">R{{ product.price }}</p>
      <p class="py-2">{{ product.descriptions }}</p>
        <router-link :to="{ name: 'singleview', params: { id: product.id} }">
            <button
                type="submit"
                class="btn rounded-pill py-2"
                @click="getProduct(product.product_id)"
            >
            <router-link to="/singlepage"></router-link>
                More Details
            </button>
        </router-link>
      <button @click="addToCart(product)" class="btn btn-lg rounded-pill ms-1">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <span class="btn2 ms-1">Add</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "@/components/ProductCard.vue"
export default {
  name: "HomeView",
  // props: [id],
  data() {
    return {};
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
// diplayBasket = () => {
//   Basket.classList.toggle("active");
// };

// let cart = [];

// let Basket = document.querySelector("#userCart");
// if (!localStorage.getItem("product")) {
//   console.log("cart empty");
// } else {
//   window.addEventListener("click", diplayBasket());
// }
// // document.querySelectorAll('.Item').addEventListener('click',showProduct())
// let ResetData = () => {
//   localStorage.clear();
// };
// async function showItem(id) {
//   const response = await fetch(
//     "https://eom-project.herokuapp.com/products/" + `${id}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//       },
//     }
//   );
//   let cartArray = [];
//   let data = await response.json();
//   let product = data;
//   localStorage.setItem("product", JSON.stringify(product.pop()));
//   // alert(localStorage.product)
//   //   console.log=0
//   cartArray.push(JSON.parse(localStorage.product));
//   console.log(cartArray);
//   cartArray.forEach((product) => {
//     Basket.innerHTML += `
//     <div class="productName">
//     <h1>
//     ${product.name}
//     </h1>
//     </div>
//     <div class="productContent">
//     <img src="${product.image}" alt="${product.name}">
//     <h3>${product.descriptions}</h3>
//     <input id="qty"> QTY </input>
//     <p id="total">R${product.price}</p>

//     </div>
//     `;
//     console.log(cartArray[0]);
//     cart.push(cartArray[0].product_id);
//     console.log(cart);
//     localStorage.setItem("cart", JSON.stringify(cart));
//   });
// }
// let resetData = () => {
//   localStorage.clear();
//   Basket.innerHTML = `
//      <button onclick="resetData()">CHECKOUT</button>
//      `;
// };
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
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
}

img {
  width: 200px;
  height: 200px;
}

button.btn {
  background-color: crimson;
  color: black;
  height: 40px;
  padding: 10px;
  text-align: center;
}
</style>
