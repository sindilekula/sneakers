<template>
  <div class="products">
    <h1>Products Page</h1>
  <div class="cards" v-for="product in Products" :key="product.id">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" />
    <p>R{{ product.price }}</p>
    <p>{{ product.descriptions }}</p>
    <button @click="getProduct(product.product_id)">View</button>
  </div>
  </div>

</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "HomeView",
  data() {
    return {};
  },
//   components: {
//     HelloWorld,
//   },
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
//  diplayBasket=()=>{
//         Basket.classList.toggle('active')
//     }
// let products = [];
// const productContainer = document.getElementById("products");
// fetch("https://eom-project.herokuapp.com/products")
// .then((res) => res.json())
// .then((data) => {
// products = data;
// console.log(data);
// showproducts(data);
// });

// function showproducts(products) {
// //   prodContainer.innerHTML = "";
// products.forEach((product) => {
// productContainer.innerHTML += `
//             <tr>
//                 <td>${ product.name}</td>
//                 <td>${ product.price }</td>
//                 <td>${ product.sku }</td>
//                 <td>${ product.weight }</td>
//                 <td>${ product.description }</td>
//                 <td><img  src="${ product.image }"></td>
//                 <td><button  onclick="showItem(this.id)" id="${product.product_id}">Add to cart<button></td>

//             </tr>
//         </tbody>
// `;
// });
// }
// let cart=[]

// let Basket =document.querySelector('#userCart')
// if(!localStorage.getItem('product')){
//     console.log('cart empty')
// }
// else{
//     window.addEventListener('click',diplayBasket())
// }
// // document.querySelectorAll('.Item').addEventListener('click',showProduct())
// let ResetData = () => {
//     localStorage.clear();
//   };
// async function showItem(id) {
//   const response = await fetch(
//     "https://eom-project.herokuapp.com/products/"+`${id}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//       },
//     }
//   );
//   let cartArray= []
//   let data = await response.json();
//   let product= data;
//   localStorage.setItem("product", JSON.stringify(product.pop()));
//   // alert(localStorage.product)
// //   console.log=0
//   cartArray.push(JSON.parse(localStorage.product))
//   console.log(cartArray)
//   cartArray.forEach((product) => {
//     Basket.innerHTML+=`
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
//     `
//     console.log(cartArray[0])
//     cart.push(cartArray[0].product_id)
//     console.log(cart)
//     localStorage.setItem('cart',JSON.stringify(cart))

// })

// }
// let resetData =()=>{
//     localStorage.clear()
//      Basket.innerHTML=`
//      <button onclick="resetData()">CHECKOUT</button>
//      `
// }
</script>
<style>
.products {
    display: flex;
    flex-wrap: wrap;
}
.cards {
    color: white;
    border: solid 2px white;
    width: 400px;
    height: 500px;
    margin: 20px;
    padding: 10px;
}
img {
    width: 300px;
    height: 300px;
}
</style>
