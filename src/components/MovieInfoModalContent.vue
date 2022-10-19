<template>
  <div class="movie-info-wrap">
    <header class="movie-info-wrap__header">
      <h6 class="movie-info-wrap__title">Movie view</h6>
      <BIconX class="movie-info-wrap__close-icon" @click="closeModal" />
    </header>
    <div class="movie-info-content">
      <bRow>
        <BCol sm="4">
          <div class="movie-poster-wrap">
            <div class="movie-poster-wrap__poster" :style="posterStyle"></div>
          </div>
        </BCol>
        <BCol sm="8">
          <h3 class="movie-info-content__title">{{ movie.Title }}</h3>
          <BFormRating
            v-model="movie.imdbRating"
            readonly
            show-value
            precision="1"
            stars="10"
            show-value-max
            no-border
            class="movie-rating"
          />
          <p class="movie-info-content__description">{{ movie.Plot }}</p>
          <div class="mt-3 mb-4">
            <BBadge variant="light" class="mr-2 movie-info-content__badge-elem">
              {{ movie.Year }}
            </BBadge>
            <BBadge variant="light" class="mr-2 movie-info-content__badge-elem">
              {{ movie.Runtime }}
            </BBadge>
            <BBadge variant="light" class="mr-2 movie-info-content__badge-elem">
              {{ movie.Genre }}
            </BBadge>
            <BBadge variant="light" class="mr-2 movie-info-content__badge-elem">
              {{ movie.Language }}
            </BBadge>
          </div>

          <table class="table small">
            <tbody>
              <tr>
                <th>Actors</th>
                <td>{{ movie.Actors }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ movie.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ movie.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ movie.Writer }}</td>
              </tr>
            </tbody>
          </table>
        </BCol>
      </bRow>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieInfoModalContent",
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    defaultPosterBg: "linear-gradient(rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)",
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-info-wrap {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
    color: #ffffff;
  }
  &__title {
    font-size: 1.25rem;
    margin-bottom: 0;
    line-height: 1.5;
  }
  &__close-icon {
    font-size: 24px;
    cursor: pointer;
  }
}
.movie-info-content {
  padding: 1rem;
  background-color: #ffffff;

  &__title {
    font-size: 3.2rem;
    font-weight: 200;
    line-height: 1.2;
  }
  &__description {
    font-size: 1.25rem;
    font-weight: 300;
  }
  &__badge-elem {
    background-color: green;
    margin-left: 5px;
  }
}
.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;

  &__poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
}
.movie-rating {
  padding: 0;

  &:focus {
    box-shadow: none;
  }
}
.movie-rating /deep/ .b-rating-star,
.movie-rating /deep/ .b-rating-value {
  justify-content: flex-start;
  flex-grow: 0 !important;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0;
}
.movie-rating /deep/ .b-rating-value {
  margin-left: 10px;
}
.movie-rating /deep/ .b-rating-star + .b-rating-star {
  margin-left: 4px;
}
.movie-rating /deep/ .b-rating-star .b-rating-icon {
  color: #ffc107;
}
</style>
