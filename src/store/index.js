import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import loader from "./loader";
import notification from "./notification";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    notification,
  },
});

store.dispatch("initMoviesStore");

export default store;
