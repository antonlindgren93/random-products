<template>
  <div class="container">
    <img class="image" :src="image" />
    <label class="label" for="email" >Email</label>
    <input class="input" type="text" placeholder="enter email.." />

    <label class="label" for="password">Password</label>
    <input class="input" type="password" placeholder="enter password.." />

    <button class="button">
      <router-link class="link" to="/products">Log in</router-link>
    </button>
  </div>
</template>

<script>
import image from "../assets/shoppingcart.png";

export default {
  name: "Login",
  data() {
    return {
      image: image,
    };
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 260px;
}
.label {
  padding: 5px;
}
.input {
  padding: 12px 20px;
  font-size: 1rem;
  border-style: solid;
  text-align: center;
  outline: transparent;
  width: 50%;
  border-radius: 5px;
}
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: purple;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 150px;
  margin-top: 10px
}
.link {
  color: white;
}
</style>
