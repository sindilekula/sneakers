<template>
  <div class="landing">
    <div class="row mt-5 m-3 p-3">
      <div class="col-lg-3">
        <div class="logos">
          <div class="card">
            <img src="../assets/nike.jpg" alt="" class="img-fluid" />
          </div>
          <div class="card">
            <img src="../assets/adidas.jpg" alt="" class="img-fluid" />
          </div>
          <div class="card">
            <img src="../assets/puma.jpg" alt="" class="img-fluid" />
          </div>
          <div class="card">
            <img src="../assets/vans.jpg" alt="" class="img-fluid" />
          </div>
          <div class="card">
            <img src="../assets/jordan.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="heading">SNEAKIFIED</h1>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          consectetur. Sint aliquid iure perferendis repudiandae dolor? Pariatur
          vel ea dicta et hic, tempora molestias quidem eaque laudantium,
          accusamus voluptatem accusantium!
        </p>
        <p class="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptate mollitia in, molestias, ex iure odio voluptates quaerat
          aspernatur autem veritatis accusamus iste? Cumque adipisci dolorum
          quae voluptatibus amet alias!
        </p>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          accusamus accusantium enim voluptatibus numquam exercitationem
          cupiditate, cumque nobis facere impedit repellendus similique illo
          commodi autem quaerat doloribus nulla rerum deleniti?
        </p>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.landing {
  min-height: 100vh;
}

.card {
  background-color: grey;
  width: fit-content;
  padding: 10px;
  margin: 25px;
}

.img-fluid {
  height: 150px;
  width: 300px;
  object-fit: cover;
}

img:hover {
  transform: scale(1.1);
  background-color: crimson;
}

.heading {
  color: crimson;
  text-shadow: 1px 1px 1px white;
  position: relative;
  cursor: pointer;
}

.heading:before {
    content: '';
    width: 20%;
    height: 1px;
    position: absolute;
    left: 40%;
    bottom: -8px;
    border-bottom: solid 2px white;
}

.content {
  font-size: 25px;
  margin: 5px;
  padding: 5px;
  color: white;
}
</style>
