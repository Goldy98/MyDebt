<template>
  <v-row justify="center">
    <v-dialog v-model="displayed" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ config.headline }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  :label="config.inputLabel"
                  :type="config.type"
                  v-model="inputValue"
                  color="red"
                  required
                  autofocus
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="onAbort">Annuler</v-btn>
          <v-btn color="red darken-1" text @click="onOk">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    config: Object
  },
  data: () => ({
    inputValue: "",
    displayed: false
  }),
  mounted() {
    this.displayed = this.config && this.config.displayed;
  },
  methods: {
    onAbort() {
      this.displayed = false;
      const dialogResult = {
        result: "aborted"
      };
      this.$emit("onDialogDismiss", dialogResult);
    },
    onOk() {
      this.displayed = false;
      const dialogResult = {
        result: "completed",
        value: this.inputValue
      };
      console.log(this.inputValue);
      this.$emit("onDialogDismiss", dialogResult);
    }
  }
};
</script>

<style scoped>
</style>