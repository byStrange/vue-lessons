<template>
  <div class="container">
    <h1 class="color-name">{{ RGB }}</h1>
    <div class="col fx">
      <div style="position: relative">
        <input
          type="text"
          placeholder="Enter Hex  color"
          v-model="hex"
          @keyup="hexToRgb"
          style="margin-left: 40px"
        />
        <span id="hashTag">#</span>
      </div>
    </div>
    <div class="col">
      <input type="range" v-model="r" min="0" max="255" @input="rgb" />
    </div>
    <div class="col">
      <input type="range" v-model="g" min="0" max="255" @input="rgb" />
    </div>
    <div class="col">
      <label for="me"></label>
      <input type="range" v-model="b" min="0" max="255" @input="rgb" />
    </div>
    <div class="col fx">
      <div>
        <div class="btn" @click="copy"><span>copy</span></div>
      </div>
      <div>
        <div class="btn" @click="random"><span>random</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      r: 0,
      g: 0,
      b: 0,
      RGB: "rgb(0,0,0)",
      hex: "",
    };
  },
  methods: {
    rgb() {
      this.RGB = `rgb(${this.r}, ${this.g}, ${this.b})`;
      document.body.style.background = this.RGB;
    },
    random() {
      this.r = Math.floor(Math.random() * 255);
      this.g = Math.floor(Math.random() * 255);
      this.b = Math.floor(Math.random() * 255);
      this.rgb();
    },
    copy() {
      const text = this.RGB;
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    hexToRgb() {
      var hex = this.hex
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      const r = result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
      this.r = r.r;
      this.g = r.g;
      this.b = r.b;
      this.rgb();
    },
    setFontSize(){
      document.querySelector('h1').style.fontSize = (window.innerWidth / 11) + 'px';
    }
  },
  mounted() {
    setInterval(()=>{
      if(innerWidth < 768){
        this.setFontSize();
      }
    }, 1)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background: rgb(0, 0, 0);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}
.container .col {
  width: 100%;
}
.container .col input {
  width: 100%;
}
.container .color-name {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 6.5em;
  text-shadow: 0 0 40px cyan;
  font-family: poppins, Helvetica, sans-serif;
  z-index: -1;
  width: 100%;
}

input[type="range"] {
  appearance: none;
  width: 80%;
  height: 70px;
  border: 1px solid rgba(255,255,255,.1);
  background: transparent;
  box-shadow: inset 0 0 10px 0px black;
  border-radius: 35px;
  padding: 0 10px 0 10px;
  margin: 20px auto;
}
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 60px;
  height: 60px;
  border-radius: 35px;
  background: rgba(31, 45, 64, 1);
  border: 5px solid #0c9140;
  box-shadow: 0 0 10px 2px #0c9121;
  filter: grayscale(0.5) brightness(85%);
  transition: 200ms;
  cursor: -webkit-grab;
}
input[type="range"]::-webkit-slider-thumb:hover {
  filter: grayscale(0.3) brightness(100%);
}
input[type="range"]::-webkit-slider-thumb:active {
  filter: grayscale(0);
  box-shadow: 0 0 0;
  cursor: -webkit-grabbing;
}
.col.fx {
  display: flex;
  justify-content: center;
  position: relative;
}
.btn:hover {
  color: cyan;
  background: rgba(255, 255, 255, 0.1);
}
.btn:active {
  transform: scale(0.98, 0.98);
}
.btn {
  border: 1px solid rgba(255,255,255,.1);
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  transition: color 600ms, background 600ms;
  font-size: 25px;
  font-family: Poppins, Helvetica, sans-serif;
  text-shadow: 0 0 10px cyan;
  background: transparent;
  cursor: pointer;
  user-select: none;
}
.btn {
  margin-left: 10px;
}
input[type="text"]{
	border: none;
	outline: none;
	position: relative;
	padding: 10px;
	overflow: hidden;
	margin-bottom: 10px;
	background: rgba(2,0,0,.1);
	border: 1px solid rgba(255,255,255,.1);
	border-radius: 10px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0;
	color: #fff;
}
input[type="text"]::placeholder{
  color: #fff;
  opacity: .7;
}

#hashTag{
	position: absolute;
	top: 0;
	left: 2px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	color: #fff;
	width: 40px;
	height: 37px;
	background: rgba(130,130,130,.5);
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Poppins, "Helvetica Neue", Helvetica, sans-serif;
}
</style>
