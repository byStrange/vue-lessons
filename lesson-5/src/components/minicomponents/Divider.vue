<template>
  <div
    v-if="margin"
    class="divider"
    :axis="axis"
    :style="{
      margin: margin + 'px',
      height: height + 'px',
      width: width + 'px',
      height: height + 'px',
    }"
  ></div>
  <div
    v-else
    :style="{
      marginTop: top + 'px',
      marginBottom: bottom + 'px',
      marginLeft: left + 'px',
      marginRight: right + 'px',
      height: height + 'px',
      width: width + 'px',
      height: height + 'px',
    }"
  ></div>
</template>

<script>
export default {
  props: ["margin", "left", "right", "bottom", "top", "width", "height"],
};
</script>

<style>
</style>