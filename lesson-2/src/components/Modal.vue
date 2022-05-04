<template>
  <div class="container" @click.self="closeModal">
    <div class="modal" :class="{ red: theme === 'red' }">
      <slot name="content"></slot>
      <div class="links">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: ["title", "content", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
