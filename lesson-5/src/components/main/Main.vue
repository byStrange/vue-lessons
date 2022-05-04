<template>
  <div class="main">
    <Background />
  </div>
</template>

<script>

import Background from "./Background";
export default {
  name: "Main",
    components: { Background },
};
</script>

<style lang="stylus">
.main {
  width: 100%;
  height: calc(100vh - 75px);
}
</style>