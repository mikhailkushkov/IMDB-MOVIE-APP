<template>
  <BContainer>
    <h3 class="list-title">{{ listTitle }}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol sm="6" md="4" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </BRow>
    <BModal :id="movieInfoModalId" size="xl" hide-footer hide-header>
      <p>modal</p>
    </BModal>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem";
export default {
  name: "MoviesList",
  data: () => ({
    movieInfoModalId: "movie-info",
  }),
  components: {
    MovieItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure you want to delete ${title}?`
      );

      if (isConfirmed) {
        this.removeMovie(id);
      }
    },
    onShowMovieInfo() {
      this.$bvModal.show(this.movieInfoModalId);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-title {
  font-style: 50px;
  margin-bottom: 30px;
  color: #ffffff;
}
</style>
