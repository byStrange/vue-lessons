<template>
  <header>
    <nav class="nav">
      <div class="container">
        <div class="logo">
          <router-link to="/" class="link">
            <span>Anow</span>
          </router-link>
        </div>
        <ul class="nav-links">
          <li class="item">
            <router-link to="/" class="link">Home</router-link>
          </li>
          <li class="item">
            <router-link to="/" class="link">About us</router-link>
          </li>
          <li class="item">
            <router-link to="/" class="link">Portfolio</router-link>
          </li>
          <li class="item">
            <router-link to="/" class="link">Team</router-link>
          </li>
          <li class="item">
            <router-link to="/" class="link">News</router-link>
          </li>
          <li class="item">
            <router-link to="/" class="link">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="stylus">
center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  width: 100%;
  height: 75px;
  background: #fff;

  .logo {
    max-width: 200px;
    position: absolute;
    left: 0;

    a {
      font-size: 30px;
      font-weight: bold;
    }
  }

  .nav {
    width: 100%;
    height: 100%;
    display: flex;
    center();
  }

  .container {
    width: 90%;
    height: 100%;
    position: relative;
    center();
  }
}

@media screen and (max-width: 991px) {
  header {
    .container {
      justify-content: flex-end !important;
    }
  }
}
</style>
