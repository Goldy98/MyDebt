<template>
  <div>
    <div class="title mb-3 ml-1">Mes Dettes</div>

    <v-list flat style="background-color: transparent">
      <v-list-item-group v-model="item" color="red">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-avatar>
            <v-img v-html="generateIdenticon(item.text)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-img src="@/assets/not-paid.png" v-if="item.statut !== 'paid'"></v-img>
            <v-img src="@/assets/paid.png" v-else></v-img>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <AddDialog
      :config="dialogConfig"
      v-if="dialogConfig.displayed"
      @onDialogDismiss="onDialogDismiss"
    />
  </div>
</template>

<script>
import jdenticon from "jdenticon";
import AddDialog from "./AddDialog";
import { mapGetters } from "vuex";

export default {
  components: {
    AddDialog
  },
  data: () => ({
    item: 1,
    items: [
      {
        text: "Papa",
        subtitle: "5 prêts | Total : 20 000",
        statut: "paid"
      },
      {
        text: "Audience",
        subtitle: "5 prêts | Total : 20 000",
        statut: "not-paid"
      },
      {
        text: "Conversions",
        subtitle: "5 prêts | Total : 20 000",
        statut: "paid"
      }
    ],
    dialogConfig: {
      headline: "Enregistrer une dette",
      inputLabel: "Nom du créancier",
      type: "text",
      displayed: false
    }
  }),
  mounted() {
    jdenticon.config = {
      lightness: {
        color: [0.4, 0.8],
        grayscale: [0.3, 0.9]
      },
      saturation: {
        color: 0.91,
        grayscale: 0.89
      },
      backColor: "#86444400"
    };
  },
  methods: {
    generateIdenticon(text) {
      return jdenticon.toSvg(text, 100);
    },
    showDialog() {
      this.dialogConfig.displayed = true;
    },
    onDialogDismiss(dialogResult) {
      this.dialogConfig.displayed = false;
    }
  },
  computed: {
    ...mapGetters(["activeComponent", "fabClicked"])
  },
  watch: {
    fabClicked(newValue, oldValue) {
      this.showDialog();
    }
  }
};
</script>

<style scoped>
</style>
