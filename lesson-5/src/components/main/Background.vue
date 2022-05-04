<template>
  <div class="background">
    <div class="moon right">
      <img src="../../assets/images/moon.svg" />
    </div>
    <div class="piece left">
      <img src="../../assets/images/piece.svg" />
    </div>
    <div class="circle center">
      <img src="../../assets/images/circle.svg" />
    </div>
    <div class="ground bottom">
      <img src="../../assets/images/ground.svg" />
    </div>
    <div class="times left">
      <img src="../../assets/images/times.svg" />
    </div>
    <div class="times right">
      <img src="../../assets/images/times.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Background",
  mounted() {
    this.$el
      .querySelectorAll("img")
      .forEach((img) => img.setAttribute("draggable", false));
  },
};
</script>

<style lang="stylus">
.background {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('../../assets/images/background.png');
  background-repeat: no-repeat;
  backgronud-size: cover;

  > div {
    position: absolute;
    user-select: none;
  }

  .circle.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .piece.left {
    top: 0;
    left: 0;
  }

  .moon.right {
    top: 20px;
    right: 100px;
  }

  .ground.bottom {
    bottom: 0;
    right: 0;
  }

  .times {
    transition: 200ms;

    &:hover {
      transform: rotate(90deg);
    }
  }

  .times.left {
    bottom: 200px;
    left: 100px;
  }

  .times.right {
    top: 45%;
    right: 100px;

    &:hover {
      transform: rotate(90deg);
      right: 100px;
    }
  }
}
</style>