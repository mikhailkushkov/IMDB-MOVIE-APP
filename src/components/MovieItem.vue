<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap">
      <div class="movie-item-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="movie-item-controls row no-gutters">
        <div class="col">
          <BButton
            size="md"
            block
            variant="outline-light"
            @click="showInfoModalEvent"
            >Info</BButton
          >
        </div>
        <div class="col">
          <BButton
            size="md"
            block
            variant="outline-light"
            @click="emitRemoveEvent"
            >Remove</BButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBg() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    showInfoModalEvent() {
      this.$emit("showModal", this.movie.imdbID);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin movie-item-hover {
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4);
  transform: scale(1.02);
}
@mixin text-shadow {
  text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
  -moz-text-shadow: 0 0 2px #000;
  -webkit-text-shadow: 0 0 2px #000;
}
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 400px;

  &:hover {
    @include movie-item-hover;

    .movie-info-wrap {
      opacity: 1;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }
  }

  .movie-item-poster {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  .movie-info-wrap {
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    opacity: 0;
    transition: all 0.2s ease;

    .movie-item-info {
      //background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      color: #ffffff;
      @include text-shadow;

      .movie-title {
        font-style: 18px;
      }
      .movie-year {
        font-size: 14px;
      }
    }

    .movie-item-controls {
      position: relative;

      .col > button {
        width: 100%;
      }
    }
  }
}
</style>
