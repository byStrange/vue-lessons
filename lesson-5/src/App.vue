<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  components: { Header, Main },
  name: "App",
};
</script>

<style lang="stylus"></style>
