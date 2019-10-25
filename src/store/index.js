import Vue from "vue";
import Vuex from "vuex";
import uimodules from "./modules/ui-module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    uimodules
  }
});
