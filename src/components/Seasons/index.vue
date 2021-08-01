<template>
  <v-card color="#ffffff00">
    <div
      class="py-2 px-5 bg-green-600 flex justify-between"
      v-on:click="show = !show"
    >
      <h3 class="text-2xl text-white font-bold">1° Temporada</h3>
      <span class="w-3/12 flex justify-around">
        <v-icon v-on:click="watched = !watched" x-large color="#89D9AE">{{
          watched ? "mdi-check-bold" : "mdi-check-outline"
        }}</v-icon>
        <v-icon v-on:click="liked = !liked" x-large color="#E1476C">{{
          liked ? "mdi-heart" : "mdi-heart-outline"
        }}</v-icon>
        <v-icon v-on:click="marked = !marked" x-large color="#1b3e9e">{{
          marked ? "mdi-video" : "mdi-video-outline"
        }}</v-icon>
      </span>
    </div>
    <v-expand-transition>
      <div v-show="show">
        <div class="flex justify-between divider px-5 py-2">
          <p class="text-2xl text-gray-500 font-bold">1- Piloto</p>
          <span class="w-3/12 flex justify-around">
            <v-icon x-large color="#89D9AE">{{
              watched ? "mdi-check-bold" : "mdi-check-outline"
            }}</v-icon>
            <v-icon x-large color="#E1476C">{{
              liked ? "mdi-heart" : "mdi-heart-outline"
            }}</v-icon>
            <v-icon x-large color="#1b3e9e">{{
              marked ? "mdi-video" : "mdi-video-outline"
            }}</v-icon>
          </span>
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      watched: false,
      liked: false,
      marked: false,
      show: false,
    };
  },
};
</script>
