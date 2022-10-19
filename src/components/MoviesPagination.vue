<template>
  <div class="movies-pagination d-flex justify-content-center">
    <BPagination
      v-model="currentPageModel"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    // когда мы используем computed property как v-model:
    // то с помощью get() - v-model будет забирать текущее значение,
    // а в set() вызывать и передавать новое значение которое было изменено
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("pageChanged", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.movies-pagination {
  margin-top: 30px;

  /deep/ .pagination .page-item .page-link {
    background-color: transparent;
    font-size: 12px;
    color: #ffffff;
    box-shadow: none;
  }
  /deep/ .pagination .page-item.active .page-link {
    border-color: #ffffff;
    background-color: #ffffff;
    color: #000000;
  }
  /deep/ .pagination .page-item.disabled .page-link {
    color: #848383;
  }
}
</style>
