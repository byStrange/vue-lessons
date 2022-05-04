<template>
  <div class="content">
    <div class="text">
      <p>design is thinking</p>
      <p>made visual</p>
    </div>
    <div class="flex center">
      <Button text="Start Now" />
      <Divider width="40" />
      <Button text="See More" transparent="true" />
    </div>
  </div>
</template>

<script>
import Button from "../minicomponents/Button";
import Divider from "../minicomponents/Divider";
export default {
  name: "Content",
  components: { Button, Divider },
};
</script>

<style lang="stylus">
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  width: 630px;

  .text {
    font-size: 70px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #fff;
    text-align: center;
  }
}
</style>