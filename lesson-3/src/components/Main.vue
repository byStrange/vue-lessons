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
  name: "Main",
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