import router from "@/router";
import { createStore } from "vuex";

export default createStore({
  state: {
    product:null,
    products: null,
    singleProduct: null,
    user: null,
    asc: true,
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
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    sortProductsByPrice: (state) => {
      state.products = state.products.sort((a, b) => {
        // return a.number - b.number;
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    sortProductsByName: (state) => {
      state.products = state.products.sort((a, b) => {
        // return a.number - b.number;
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
  },
  // cart
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
    addToCart: async (context, id) => {
      console.log(id)
      // this.state.cart.product.push(id);
      // context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((product) => product.product_id != id);
      context.commit("removeFromCart", newCart);
    },

    // GET ALL PRODUCTS
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
    
    // GET A SINGLE PRODUCT
    getProduct: async (context, id) => {
      // fetch(`https://eom-project.herokuapp.com/products/${id}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.length === 0) {
      //       console.log(data);
      //     } else {
      //       // console.log(data);
      //       context.commit("setProduct", data);
      //       // console.log(data);
      //     }
      //   });    
      fetch(`https://eom-project.herokuapp.com/products/${id}`)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
    },

    // ADD A PRODUCT
    addProduct: async (context, product) => {
      fetch(`https://eom-project.herokuapp.com/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },

    // DELETE A PRODUCT
    // deleteProduct: async (context, id) => {
    //   fetch(`https://eom-project.herokuapp.com/products/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((response) => response.json())
    //     .then(() => context.dispatch("getProducts"));
    // },

    // LOGIN USER
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
          alert(payload.email);
        });
        router.push({
          name: 'products'
        })
    },

    // REGISTER USER
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
  
    },
    updateProduct: async (context, product) => {
			fetch("https://eom-project.herokuapp.com/products" + piece.id, {
				method: "PUT",
				body: JSON.stringify(product),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.dispatch("getProducts"));
		},

		// delete
		deleteProduct: async (context, id) => {
			fetch("https://eom-project.herokuapp.com/products/" + id, {
				method: "DELETE",
			})
				.then((response) => response.json())
				.then(() => context.dispatch("getProducts"));
		},
    // create a product
		createProduct: async (context, payload) => {
      let user={
        user_type:"admin"
      }
      let userData=JSON.stringify(user)
			const { name, price, descriptions, image, brand } =
				payload;
			await fetch("https://eom-project.herokuapp.com/products/addingproduct", {
				method: "POST",
				body: JSON.stringify({
					name: name,
					price: price,
					descriptions: descriptions,
          image: image,
					brand: brand,
          user:userData,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => response.json())
				.then(() => context.dispatch("getProducts"));
		},

  },
  modules: {},
});
