<template>
    <div id="output" class="mt-5 mb-5">
        <h1>LOG IN</h1>
        <form method="post" id="form">
            <label for="email">Email</label>
            <input
            type="text"
            name="email"
            id="email"
            class="mt-2 mb-2"
            placeholder="Enter your email address..."
            required
            />
            <label for="password">Password</label>
            <input
            type="text"
            name="password"
            id="password"
            class="mt-2 mb-2"
            placeholder="Enter your password..."
            required
            />
            <button type="submit" id="btn">Login</button>
            <div class="mt-5">
            <p>Not a member? <span><router-link href="#" to="/register" class="register">Register</router-link></span></p>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const userEmail = document.getElementById("email").value;
      const psw = document.getElementById("password").value;
      fetch("https://eom-project.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: psw,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        });
    });
</script>
<style scoped>
#output {
    background-color: crimson;
    border: solid 3px black;
    margin: 40px;
    padding: 30px;
    width: 500px;
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
    margin: 20px;
    padding: 10px;
    /* text-align: center; */
}
        
form input {
    width: 80%;
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
</style>