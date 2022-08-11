<template>
    <div id="output" class="mt-5 mb-5">
        <h1>SIGN UP</h1>
        <form >
            <label for="email">Fullname</label>
            <input type="text" name="email" id="email" class="mt-2 mb-2" placeholder="Enter your email address..." required />
            <label for="password">Email</label>
            <input type="text" name="password" id="password" class="mt-2 mb-2" placeholder="Enter your password..." required />
            <label for="password">Password</label>
            <input type="text" name="password" id="password" class="mt-2 mb-2" placeholder="Enter your password..." required />
            <label for="password">Billing Address</label>
            <input type="text" name="password" id="password" class="mt-2 mb-2" placeholder="Enter your password..." required />
            <label for="password">Shipping Address</label>
            <input type="text" name="password" id="password" class="mt-2 mb-2" placeholder="Enter your password..." required />
            <label for="password">Country</label>
            <input type="text" name="password" id="password" class="mt-2 mb-2" placeholder="Enter your password..." required />
            <label for="password">Phone</label>
            <input type="text" name="password" id="password" class="mt-2 mb-2" placeholder="Enter your password..." required />
            <button type="submit" id="btn">Register</button>
            <div class="mt-5">
            <p>Already got an account? <span><router-link href="#" to="/login" class="login">Log In</router-link></span></p>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
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