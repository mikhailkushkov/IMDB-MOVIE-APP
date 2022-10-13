<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExist">
        <BCol sm="6" md="4" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
import { mapActions } from "vuex";
import MovieItem from "./MovieItem";
export default {
  name: "MoviesList",
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
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      console.log(id, title);
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure you want to delete ${title}?`
      );

      if (isConfirmed) {
        this.removeMovie(id);
      }
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
