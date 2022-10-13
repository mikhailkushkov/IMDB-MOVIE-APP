import mutations from "./mutations";

const { TOGGLE_LOADER } = mutations;

const loaderStore = {
  state: {
    isShowLoader: false,
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader,
  },
  mutations: {
    [TOGGLE_LOADER](state, boolean) {
      state.isShowLoader = boolean;
    },
  },
  actions: {
    toggleLoader({ commit }, boolean) {
      commit(TOGGLE_LOADER, boolean);
    },
  },
};

export default loaderStore;
