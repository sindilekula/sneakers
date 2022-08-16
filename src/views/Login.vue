<template>
  <div id="output" class="mt-5 mb-5">
    <h1>LOG IN</h1>
    <form>
      <label for="email">Email</label>
      <input
        type="text"
        v-model="email"
        class="mt-2 mb-2"
        placeholder="Enter your email..."
        required
      />
      <label for="password">Password</label>
      <input
        type="text"
        v-model="password"
        class="mt-2 mb-2"
        placeholder="Enter your password..."
        required
      />
      <button type="submit" id="btn" @click.prevent="Login()">Login</button>
      <div class="mt-5">
        <p>
          Not a member?
          <span
            ><router-link href="#" to="/register" class="register"
              >Register</router-link
            ></span
          >
        </p>
      </div>
    </form>
     <div v-if="user"><p>Welcome {{ user.full_name }}</p></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      this.$store.dispatch("Login", {
        email: this.email,
        password: this.password,
      });
      
    },
  },
};
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

#output {
  background-color: crimson;
  border: solid 3px black;
  margin: 20px;
  padding: 10px;
  width: 300px;
  height: 500px;
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
  margin: 10px;
  padding: 5px;
  /* text-align: center; */
}

form input {
  width: 90%;
  padding: 10px;
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

.register {
  text-decoration: none;
}

p {
  color: white;
}
</style>
