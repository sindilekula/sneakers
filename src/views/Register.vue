<template>
  <div id="output" class="mt-5 mb-5">
    <h1>SIGN UP</h1>
    <form>
      <label>Fullname</label>
      <input
        type="text"
        v-model="full_name"
        class="mt-2 mb-2"
        placeholder="Enter your fullname..."
        required
      />
      <label>Email</label>
      <input
        type="text"
        v-model="email"
        class="mt-2 mb-2"
        placeholder="Enter your email..."
        required
      />
      <label>Password</label>
      <input
        type="text"
        v-model="password"
        class="mt-2 mb-2"
        placeholder="Enter your password..."
        required
      />
      <label>Billing Address</label>
      <input
        type="text"
        v-model="billing_address"
        class="mt-2 mb-2"
        placeholder="Enter your billing address..."
        required
      />
      <label>Shipping Address</label>
      <input
        type="text"
        v-model="default_shipping_address"
        class="mt-2 mb-2"
        placeholder="Enter your defaul shipping address..."
        required
      />
      <label>Country</label>
      <input
        type="text"
        v-model="country"
        class="mt-2 mb-2"
        placeholder="Enter your country..."
        required
      />
      <label>Phone</label>
      <input
        type="text"
        v-model="phone"
        class="mt-2 mb-2"
        placeholder="Enter your phone number..."
        required
      />
      <button type="submit" id="btn" @click.prevent="Register()">
        Register
      </button>
      <div class="mt-5">
        <p>
          Already got an account?
          <span
            ><router-link href="#" to="/login" class="login"
              >Log In</router-link
            ></span
          >
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      full_name: "",
      billing_address: "",
      default_shipping_address: "",
      country: "South Africa",
      phone: "",
      user_type: "user",
    };
  },
  methods: {
    Register() {
      this.$store.dispatch("Register", {
        email: this.email,
        password: this.password,
        full_name: this.full_name,
        billing_address: this.billing_address,
        default_shipping_address: this.default_shipping_address,
        country: "South Africa",
        phone: this.phone,
        user_type: "user",
      });
    },
  },
};
</script>
<style scoped>
#output {
  background-color: crimson;
  border: solid 3px black;
  margin: 40px;
  padding: 30px;
  width: 500px;
  height: 850px;
  box-shadow: 5px 5px 5px #000122;
  /* text-align: center; */
  display: block;
  margin: 0 auto;
  border-radius: 30px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 5px;
  /* text-align: center; */
}

form input {
  width: 80%;
  padding: 5px;
  border-radius: 10px;
  border: solid 1px black;
}

form label {
  color: white;
  font-size: 20px;
}

button#btn {
  margin-top: 10px;
  width: 100px;
  border-radius: 10px;
  background-color: black;
  color: white;
}

button#btn:hover {
  background-color: white;
  color: black;
}

h1 {
  text-align: center;
}

.login {
  text-decoration: none;
}
</style>
