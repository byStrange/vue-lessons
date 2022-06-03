<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="helloWorld" />
    <button @click="counter.num++">{{ counter.num }}</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<script setup>
import { reactive, ref } from "vue";
const counter = ref({num: 0});
const helloWorld = "Welcome To  Vue.js App <h1>hello";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
