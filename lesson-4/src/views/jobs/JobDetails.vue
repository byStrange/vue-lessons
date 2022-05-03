<template>
  <div>
      <h1>This is Job details page</h1>
    Id is {{ id }}
  </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     };
    // }    
};
</script>

<style>
</style>