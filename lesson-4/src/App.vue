<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    </nav>

    <button @click="redirect">Redirect</button>
    <button @click="back">back</button>
    <button @click="forward">forward</button>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "about" });
    },
    back() {
      this.$router.back();
      // or
      // this.$router.go(-1);
    },
    forward() {
      this.$router.forward();
      // or
      // this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin: 010px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
