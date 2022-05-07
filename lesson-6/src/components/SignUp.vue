<template>
  <div class="form container">
    <h1>Sign up</h1>
    <form action="POST" @submit.prevent="handleSubmit">
      <input type="text" v-model="name" placeholder="name" />
      <br />
      <input type="email" placeholder="email" v-model="email" />
      <br />
      <input type="password" placeholder="password" v-model="password" />
      <div :style="{ height: '10px' }"></div>
      <input type="password" placeholder="re-password" v-model="password2" />
      <br />
      <button type="submit" class="btn">Sign up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
   async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.password2,
      };
      const response = await axios.post("http://localhost:8080/register", data);
      console.log(response)
    },
  },
};
</script>