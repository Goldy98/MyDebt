<template>
  <div>
    <div class="title mb-3 ml-1">Mes créances</div>

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
  </div>
</template>

<script>
import jdenticon from "jdenticon";
export default {
  data: () => ({
    item: 1,
    items: [
      {
        text: "Albertine",
        subtitle: "5 prêts | Total: 20 000 | Reste: 10 000",
        statut: "paid",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        text: "Jean",
        subtitle: "5 prêts | Total: 20 000 | Reste: 10 000",
        statut: "not-paid",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      }
    ]
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
    }
  }
};
</script>

<style scoped>
</style>
