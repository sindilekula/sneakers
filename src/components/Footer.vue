<template>
<div class="footer">
    <div class="row">
        <div class="col-lg-4">
            <img src="../assets/logo-removebg-preview.png" alt="">
        </div>
        <div class="col-lg-1 text-center">
            <h5>BRANDS</h5>
            <ul class="d-flex flex-column text-white text-center">
                <li>Nike</li>
                <li>Adidas</li>
                <li>Puma</li>
                <li>Vans</li>
                <li>Jordan</li>
            </ul>
        </div>
        <div class="col-lg-2 text-center">
            <h5>MEN</h5>
            <ul class="d-flex flex-column text-white text-center">
                <li>Footwear</li>
                <li>Customized Sneakers</li>
            </ul>
        </div>
        <div class="col-lg-2 text-center">
            <h5>WOMEN</h5>
            <ul class="d-flex flex-column text-white text-center">
                <li>Footwear</li>
                <li>Customized Sneakers</li>
            </ul>
        </div>
        <div class="col-lg-3 text-center">
            <h5>THE COMPANY</h5>
            <ul class="d-flex flex-column text-white text-center">
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div class="button mt-3">
                <button type="button" class="btn mx-2"><a href="" class="text-dark"><i class="fa-brands fa-facebook"></i></a></button>
                <button type="button" class="btn mx-2"><a href="" class="text-dark"><i class="fa-brands fa-instagram"></i></a></button>
                <button type="button" class="btn mx-2"><a href="" class="text-dark"><i class="fa-brands fa-youtube"></i></a></button>
            </div>
        </div>
    </div>
</div>
    <!-- <section id="footer" class="text-center">
        <div class="container text-center">
             <div class="social-media">
                <h4>FOLLOW ME</h4>
                <a target="_blank" href="https://github.com/sindilekula"><i class="fa-brands fa-github text-light" data-toggle="tooltip" data-placement="top" title="Github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/sindile-kula-2b777a238/"><i class="fa-brands fa-linkedin text-light ms-5" data-toggle="tooltip" data-placement="top" title="Linkedin"></i></a>
                <a target="_blank" href="https://codepen.io/sindilekula"><i class="fa-brands fa-codepen text-light ms-5" data-toggle="tooltip" data-placement="top" title="Codepen"></i></a>
                <a target="_blank" href="https://accounts.google.com/"><i class="fa-brands fa-google text-light ms-5" data-toggle="tooltip" data-placement="top" title="Google"></i></a>
            </div>
            <div class="footer-names mt-5">
                <ul class="list">
                    <li>Sitemap</li>
                    <li>About</li>
                    <li>Need Help?</li>
                    <li>Content Guide</li>
                    <li>Privacy</li>
                    <li>Terms of use</li>
                    <li>Advertising</li>
                </ul>
            </div>
            <div class="copyright">
                <p class="">Copyright © 2022 <span class="name">Sindile</span>. All rights reserved.</p>
            </div>
        </div>
    </section> -->
</template>
<script scoped>
export default {
    
}
</script>
<style scoped>
#footer {
    background-color: black;
    height: 220px;
}

a.btn.fa-brands {
    background-color: #ff7200;
}

a.btn.fa-brands:hover {
    background-color: #ff7200;
    color: #ff7200;
}

ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
}

.name {
    color: #ff7200;
}

a.fa-brands:hover {
    color: #ff7200;
}

.footer {
    background-color: black;
}

img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    margin-top: 20px;
}

ul {
    padding: 0;
    margin: 0;
}

ul li {
    list-style-type: none;
    text-align: center;
    margin: 5px;
}

button {
    background-color: white;
    border-radius: 50%;
}

button:hover {
    background-color: crimson;
    border-radius: 50%;
}

@media screen and (max-width: 768px) {
    ul.list li {
        font-size: 10px;
    }
}
</style>