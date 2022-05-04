<template>
  <button>
    {{ name }}
  </button>
</template>
<script>
export default {
  name: "ToZeroBtn",
  props: {
    name: String,
  },
};
</script>