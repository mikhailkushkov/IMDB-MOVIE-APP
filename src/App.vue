<template>
  <div id="app">
    <!-- передали moviesList в компоненту MoviesList -->
    <MoviesList :list="moviesList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";

export default {
  name: "App",
  components: {
    MoviesList,
  },
  computed: {
    // mapGetters - возвращает обьект с указанными свойствами которые мы хотим получить из store
    // мы передаем название сторы - "movies", и перечисляем в виде массива - что мы хотим от туда достать -
    // - достать геттер ["MoviesList"] который лежит в movies.js в геттерах
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
