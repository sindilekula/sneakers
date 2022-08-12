<template>
    <nav class="navbar navbar-expand-lg navbar-light m-3 p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><span class="first-letter">S</span>NEAKIFIED</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onclick="toggleNav()">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active text-light ms-5" aria-current="page" href="#" to="/">HOME</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light ms-5" href="#" to="/about">ABOUT</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light ms-5" href="#" to="/products">PRODUCTS</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light ms-5" href="#" to="/contact">CONTACT</router-link>
                </li>
            </ul>
            </div>
            <div class="pages">
                <router-link href="" to="/login">LOGIN</router-link>
                <router-link href="" to="/register">REGISTER</router-link>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#navbarSupportedContent {
    margin-left: 350px;
}

.container-fluid {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 13px;
    /* background-color: black; */
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    overflow: hidden;
}

.navbar-light .navbar-brand {
    /* margin-left: 100px; */
    color: white;
    font-size: 20px;
}

.first-letter {
    color: crimson;
    font-size: 40px;
}

nav ul li a {
    position: relative;
}

nav ul li a::after {
    content: '';
    width: 0;
    height: 3px;
    background: crimson;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}

nav ul li a:hover::after{
    width: 100%;
}

vbar>.container, .navbar>.container-fluid, .navbar>.container-lg, .navbar>.container-md, .navbar>.container-sm, .navbar>.container-xl, .navbar>.container-xxl {
    justify-content: center;
}

ul li.nav-link {
    margin-left: 100px;
}

.collapse {
    display: flex;
    justify-content: center;
}

.pages a {
    margin: 25px;
    text-decoration: none;
    color: white;
    position: relative;
}

.pages a::after {
    content: '';
    width: 0;
    height: 3px;
    background: crimson;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}

.pages a:hover::after {
    width: 100%;
}

a.router-link-active.router-link-exact-active.nav-link.active.text-light {
  color: #42b983 !important;
}

.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color: rgba(0,0,0,.9);
}
</style>