<template>
  <div>
    <div class="flex justify-around">
      <canvas
        width="300"
        height="450"
        class="bg-green-600 mx-2 my-1 rounded-lg"
      ></canvas>
      <div class="w-8/12">
        <span class="w-full flex justify-between">
          <h3 class="text-6xl w-9/12 text-gray-500 font-extrabold">
            {{ info.name }}
          </h3>
          <v-icon color="#fff" large class="w-1/12">mdi-pencil</v-icon>
          <v-icon color="#fff" large class="w-1/12"
            >mdi-trash-can-outline</v-icon
          >
        </span>
        <v-rating
          v-model="info.rating"
          color="#ECBA08"
          readonly
          half-increments
          large
        ></v-rating>
        <div class="w-full flex justify-around">
          <div class="w-4/12">
            <h4 class="text-2xl text-gray-500 text-center font-bold">
              Temporadas
            </h4>
            <p class="text-3xl text-center text-gray-500 font-light">
              {{ info.qtdSeasons }}
            </p>
          </div>
          <div class="w-4/12">
            <h4 class="text-2xl text-gray-500 text-center font-bold">
              Episódios
            </h4>
            <p class="text-3xl text-center text-gray-500 font-light">
              {{ info.qtdEpisodes }}
            </p>
          </div>
          <div class="w-4/12">
            <h4 class="text-2xl text-gray-500 text-center font-bold">Gênero</h4>
            <p class="text-3xl text-center text-gray-500 font-light">
              {{ info.genre }}
            </p>
          </div>
        </div>
        <div class="my-5 w-full">
          <h4 class="text-2xl text-gray-500 font-bold">Sinopse</h4>
          <p class="text-2xl text-gray-500 font-light">
            {{ info.sinopse }}
          </p>
        </div>
      </div>
    </div>
    <div class="my-5 w-full">
      <h4 class="text-2xl text-gray-500 font-bold">Contribuições</h4>
      <p class="text-2xl text-gray-500 font-light">
        {{ info.contributions }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      info: {
        name: "Nome da serie",
        qtdSeasons: "4",
        qtdEpisodes: "12",
        genre: "Ação",
        rating: 4.5,
        contributions: "Roberta Andrade, Julio da Silva",
        sinopse:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
      },
    };
  },
};
</script>
