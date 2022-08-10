import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    singleProduct: null,
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, singleProduct) {
      state.singleProduct = singleProduct;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch(`http://localhost:6969/products`)
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
      fetch(`http://localhost:6969/products/${id}`)
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
  },
  modules: {},
});
