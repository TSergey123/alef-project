import { createStore } from 'vuex';

export default createStore({
  state: {
    kids: [],
    preview: [],
  },
  getters: {
    KIDS(state) {
      return state.kids;
    },
  },
  mutations: {
    SET_PREVIEW: (state, kid) => {
      state.preview.push(kid);
    },
  },
  actions: {
    ADD_TO_PREVIEW({ commit }, kid) {
      commit('SET_PREVIEW', kid);
    },
  },
  modules: {},
});
