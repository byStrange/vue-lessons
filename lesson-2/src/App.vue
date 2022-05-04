<template>
  <div v-if="showModal">
    <Modal theme="red" @close="toggle">
      <template v-slot:content>
        <div>
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </div>
      </template>

      <template v-slot:links>
        <div>
          <a
            class="btn"
            href="https://github.com/byStrange"
            target="_blank"
            rel="noopener" 
            >Github</a
          >
          <a
            class="btn"
            href="https://github.com/byStrange"
            target="_blank"
            rel="noopener"
            >Another link</a
          >
        </div>
      </template>
    </Modal>
  </div>

    <div v-if="showModal2">
      <Modal @close="toggle2" theme="red">
        <template v-slot:content>
          <div>
            <h1>Another Modal</h1>
            <p>Another contents</p>
          </div>
        </template>

        <template v-slot:links>
          <div>
            <a class="btn" href="">Link1</a>
            <a class="btn" href="">Link2</a>
          </div>
        </template>
      </Modal>
    </div>
  <button class="btn" @click="toggle2">
    {{ text2 }}
  </button>
  <button @click="toggle" class="btn">
    {{ text }}
  </button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "IT is chance for you",
      content: "And it is a sale for you",
      showModal: false,
      showModal2: false,
      text: "Open 1st Modal",
      text2: "Open 2nd Modal",
    };
  },
  methods: {
    toggle() {
      this.showModal = !this.showModal;
    },
    toggle2() {
      this.showModal2 = !this.showModal2;
    }
  },
};
</script>
