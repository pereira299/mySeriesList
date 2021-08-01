<template>
  <div class="bg-app min-h-screen overflow-auto">
    <div id="nav" class="flex justify-between shadow-lg px-5">
      <h2 class="w-2/12 text-4xl font-bold text-green-600 py-3 font-title">
        MySeriesList
      </h2>
      <span class="w-5/12 flex justify-between text-white py-5">
        <a><p>Quero assistir</p></a>
        <a><p>Favoritos</p></a>
        <a><p>Assistido</p></a>
        <a>
          <v-icon x-large color="white"> mdi-magnify </v-icon>
        </a>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
