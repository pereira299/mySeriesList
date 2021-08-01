<template>
  <div class="py-4 px-3">
    <h3 class="text-2xl ml-5 py-2 text-gray-400">{{ title }}</h3>
    <div class="flex flex-roww-full overflow-x-auto" :id="containerId">
      <a
        class="absolute w-28"
        @mouseover="moveLeft"
        v-on:click="moveLeft"
        v-bind:class="!big ? 'h-52' : 'h-82'"
      >
        <v-icon x-large color="white"> chevron-left </v-icon>
      </a>
      <canvas
        v-for="item of itens"
        :key="item"
        :width="!big ? 350 : 612"
        :height="!big ? 200 : 350"
        class="bg-green-600 mx-2 my-1 rounded-lg"
        >slide {{ item }}</canvas
      >
      <a
        class="absolute w-28 right-3"
        v-bind:class="!big ? 'h-52' : 'h-82'"
        @mouseover="moveRight"
        v-on:click="moveRight"
      >
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    big: Boolean,
  },
  containerId: 0,
  data: () => {
    return { itens: [1, 2, 3, 4, 5, 6] };
  },
  beforeCreate() {
    this.containerId = Math.floor(Math.random() * 10000);
  },
  methods: {
    moveRight() {
      console.log(this.containerId, "right");
      document.getElementById(`${this.containerId}`).scrollLeft += 300;
    },
    moveLeft() {
      console.log(this.containerId, "left");
      document.getElementById(`${this.containerId}`).scrollLeft -= 300;
    },
  },
};
</script>
