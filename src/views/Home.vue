<template>
  <div>
    <carrousel
      v-for="(item, i) of itens"
      :key="i"
      v-bind:title="item.title"
      v-bind:data="''"
      v-bind:link="item.link"
      v-bind:big="i == 0"
    />
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel/index.vue";

export default {
  name: "Home",
  components: {
    Carrousel,
  },
  data() {
    return {
      itens: [
        { title: "Minhas series", data: "", link: "minhas-series" },
        { title: "Ação", link: "acao" },
        { title: "Ficção", link: "ficcao" },
      ],
    };
  },
};
</script>
