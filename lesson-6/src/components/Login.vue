<template>
  <div class="form container">
    <h1>Login</h1>
    <form action="POST" @submit.prevent="handleSubmit">
      <input type="email" placeholder="email" v-model="email" />
      <br />
      <input type="password" placeholder="password" v-model="password" />
      <br />
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };
     const response = await axios.post("login", data);
     console.log(response)
    },
  },
};
</script>
