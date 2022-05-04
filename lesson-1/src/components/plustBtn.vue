<template>
  <div class="side side-left">
    {{ buttonName }}
  </div>
</template>
<script>
export default {
  name: "PlusBtn",
  props: {
    buttonName: String,
  },
};
</script>
<style>
.side-left {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
}
.side-left:hover {
    background: rgba(0,0,0,.25)
}
</style>