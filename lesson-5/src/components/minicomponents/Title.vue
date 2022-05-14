<template>
  <div :center="center ? true : false">
    <span :style="{ marginBottom: gap + 'px' }">{{ title }}</span>
    <h1 :style="{ marginTop: gap + 'px'}">
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ['title', 'text', 'center', 'gap']
}
</script>

<style scoped>
  div {
    position: relative;
  }

  div[center] {
    text-align: center;
  }

  div span {
    color: var(--main-color);
    text-transform: uppercase;
    font-size: 15px;
  }

  div h1 {
    font-size: 40px;
    color: var(--text-color);
    font-weight: 400;
  }
</style>
