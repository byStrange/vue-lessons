<template>
  <!-- not found page -->
  <div>
    <h1>404</h1>
    <p>Page not found</p>
    <p>
        <router-link :to="{ name: 'home' }">
            <button>Home</button>
        </router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
/* styles for not found page */

h1 {
  font-size: 100px;
  text-align: center;
  color: #555;
  margin-top: 50px;
}
p {
  text-align: center;
  color: #999;
  font-size: 30px;
}
p {
    button {
        color: red;
    }
}
</style>