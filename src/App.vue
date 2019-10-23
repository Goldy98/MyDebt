<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar app color="red" dark>
        <v-toolbar-title>Mes dettes & créances</v-toolbar-title>
      </v-app-bar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content class="app-content">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view transition="fade-transition"></router-view>
      </v-container>
    </v-content>

    <v-fab-transition>
      <v-btn color="red" class="mb-15" fab large dark bottom right fixed>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-footer app>
      <v-bottom-navigation :value="activeBtn" fixed grow color="red">
        <v-btn @click="onDebtClick">
          <span>Dettes</span>
          <v-icon>mdi-minus-circle-outline</v-icon>
        </v-btn>

        <v-btn @click="onIncomeClick">
          <span>Créances</span>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
import Debt from "./components/Debt";
import Income from "./components/Income";
import router from "./router";

export default {
  name: "App",
  components: {
    Debt,
    Income
  },
  data: () => ({
    activeBtn: 0
  }),
  methods: {
    onDebtClick() {
      router.push("/debt");
    },
    onIncomeClick() {
      router.push("/income");
    }
  }
};
</script>

<style scoped>
.app-content {
  padding-top: 70px !important;
}
.mb-15 {
  margin-bottom: 50px;
}
</style>