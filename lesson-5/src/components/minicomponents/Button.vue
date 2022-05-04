<template>
  <button class="btn" :transparent="transparent">
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  props: ["text", "transparent"],
  name: "Button",
};
</script>

<style>
.btn[transparent="false"],
.btn {
  display: inline-block;
  padding: 13px 38px;
  border: 2px solid var(--main-color);
  background: var(--main-color);
  transition: 200ms;
  color: #fff;
  cursor: pointer;
}
.btn[transparent="true"] {
  background: transparent !important;
  border: 2px solid var(--main-color) !important;
}

.btn[transparent="true"]:hover {
  background: var(--main-color) !important;
}
</style>