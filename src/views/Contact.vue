<template>
    <div class="contact m-3 p-3">
        <h1>Contact Us</h1>
        <div class="details d-flex">
            <div class="card text-center">
                <i class="fa-regular fa-globe my-3"></i>
                <h5>ADDRESS</h5>
                <p>314 Imam Haron Rd, Lansdowne, Cape Town, 7780</p>
            </div>
            <div class="card text-center">
                <i class="fa-regular fa-envelope my-3"></i>
                <h5>E-MAIL</h5>
                <p>Sneakified@gmail.com</p>
            </div>
            <div class="card text-center">
                <i class="fa-regular fa-clock my-3"></i>
                <h5>OFFICE TIME</h5>
                <ul>
                    <li>MON - FRI : 09H00 - 18H00</li>
                    <li>SAT - SUN : 09H00 - 17H00</li>
                    <li>PUBLIC HOLIDAYS : 09H00 - 14H00</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <form action="https://formspree.io/f/xqknwllo" method="POST" class="form">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" class="name" name="name" placeholder="Please enter your fullname..." required>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" class="email" placeholder="Please enter your email..." required>
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" id="subject" class="subject" placeholder="What you wanna talk about" required>
                    <textarea id="message" class="message my-3 text-white" placeholder="Type your message..."></textarea>
                    <div class="button mb-3 mt-3">
                        <button type="submit" class="btn btn-lg rounded-pill">Send message</button>
                    </div>
                </form>
            </div>
            <div class="col-lg-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.267419708802!2d18.490509915213323!3d-33.98566428062424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1660225405124!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

h1 {
    color: crimson;
}

.details {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card {
    width: 300px;
    margin: 30px;
    padding: 15px;
    color: white;
    background-color: rgba(255, 255, 255, 0.5);
}

ul li {
    list-style-type: none;
}

ul {
    margin: 0;
    padding: 0;
}

i {
    color: crimson;
    font-size: 40px;
}

img {
    height: 600px;
    width: 350px;
    object-fit: cover;
}

form {
    border: solid 2px white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    padding: 15px;
}

input {
    width: 97%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    margin: 10px;
    padding: 5px;
}

textarea {
   background-color: rgba(0, 0, 0, 0.6); 
   border-radius: 30px;
   margin: 10px;
   padding: 5px;
   width: 97%;
}

label {
    color: white;
}

button.btn {
    background-color: crimson;
    width: 150px;
}

button.btn:hover {
   background-color: black;
  color: crimson 
}

iframe {
    margin: 20px;
    padding: 10px;
    width: fit-content;
    height: 92%;
}

@media screen and (max-width: 992px) {
    .details {
        display: flex;
        flex-direction: column;
    }
}
</style>