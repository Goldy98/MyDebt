export default {
  state: {
    activeComponent: "debt",
    fabClicked: false
  },
  getters: {
    activeComponent: state => {
      return state.activeComponent;
    },
    fabClicked: state => {
      return state.fabClicked;
    }
  },
  mutations: {
    updateActiveComponent(state, payload) {
      state.activeComponent = payload;
    },
    updateFabStatut(state) {
      state.fabClicked = !state.fabClicked;
    }
  },
  actions: {
    setActiveComponent({ commit }, payload) {
      commit("updateActiveComponent", payload);
    },
    setFabStatut({ commit }) {
      commit("updateFabStatut");
    }
  }
};
