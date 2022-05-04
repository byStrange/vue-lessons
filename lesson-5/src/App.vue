<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/main/Main.vue";

export default {
  components: { Header, Main },
  name: "App",
  mounted() {
    console.clear()
  }
};
</script>

<style lang="stylus"></style>
