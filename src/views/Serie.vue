<template>
  <div class="px-10">
    <div class="flex justify-around py-5">
      <button v-for="(item, i) of itens" :key="i" v-on:click="position = i">
        <h2
          class="text-3xl font-extrabold tabs"
          :id="'tab-' + i"
          :class="
            position === i
              ? 'text-green-600 border-b-4 border-green-600'
              : 'text-green-700'
          "
        >
          {{ item.name }}
        </h2>
      </button>
    </div>
    <info v-if="position === 0" />
    <seasons v-if="position === 1" />
  </div>
</template>

<script>
import info from "../components/Info/index.vue";
import seasons from "../components/Seasons/index.vue";

export default {
  name: "Serie",
  components: { info, seasons },
  data() {
    return {
      position: 0,
      itens: [
        { name: "Informação" },
        { name: "Temporadas" },
        { name: "Comentarios" },
      ],
    };
  },
};
</script>
