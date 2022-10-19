<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  computed: {
    ...mapGetters(["messagePool"]),
  },
  watch: {
    messagePool: "showNotification",
  },
  methods: {
    showNotification({ variant, msg, title, autoHideDelay }) {
      this.$bvToast.toast(msg, {
        title,
        variant,
        autoHideDelay,
        solid: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
