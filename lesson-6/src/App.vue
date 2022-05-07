<template>
  <div class="container">
    <router-view />
    <div class="links">
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'signup' }">Signup</router-link>
    </div>
    <!-- bootstrap link -->
  </div>
  <!-- router view -->
</template>
<script>
export default {
  name: "App",
};
</script>
