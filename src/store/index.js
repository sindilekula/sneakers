import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    singleProduct: null,
    user: null,
    cart: []
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, singleProduct) {
      state.singleProduct = singleProduct;
    },
    setUser(state, user) {
      state.user = user;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    getCart: async (context) => {
      fetch(`https://eom-project.herokuapp.com/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    getProducts: async (context) => {
      fetch(`https://eom-project.herokuapp.com/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    getProduct: async (context, id) => {
      fetch(`https://eom-project.herokuapp.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            // console.log(data);
            context.commit("setProduct", data);
            // console.log(data);
          }
        });
    },

    Login: async (context, payload) => {
      fetch("https://eom-project.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    Register: async (context, payload) => {
      fetch("https://eom-project.herokuapp.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          full_name: payload.full_name,
          billing_address: payload.billing_address,
          default_shipping_address: payload.default_shipping_address,
          country: "South Africa",
          phone: payload.phone,
          user_type: "user",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      // fetch("https://eom-project.herokuapp.com/users/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //   });
    },
  },
  modules: {},
});
