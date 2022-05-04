<template>
  <div class="main">
    <Background />
    <Content />
  </div>
</template>

<script>
import Content from "./Content";
import Background from "./Background";

export default {
  name: "Main",
  components: { Background, Content },
};
</script>

<style lang="stylus">
.main {
  width: 100%;
  height: calc(100vh - 75px);
}
</style>