<template>
  <div class="side side-right">
    {{ btn }}
  </div>
</template>
<script>
export default {
  name: "MinusBtn",
  props: {
    btn: String,
  },
};
</script>
<style>
.side-right {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.side-right:hover {
  background: rgba(0, 0, 0, 0.25);
}
</style>