<script setup>
defineProps(["frigoItem", "handlerAdd", "handlerRemove"]);

</script>

<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
    lg="2"
    xl="2">
    <v-card color="primary">
      <v-img
        :src="`${frigoItem.photo}`"
        :alt="`${frigoItem.nom}` + ' image'"
        height="200px"
        cover
      ></v-img>
      <v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12">
              {{frigoItem.qty}} - {{ frigoItem.nom }}
              <br>
              <v-btn @click="handlerRemove(frigoItem)" class="v-btn--small">-</v-btn>
              <v-btn @click="handlerAdd(frigoItem)" class="v-btn--small">+</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
    </v-card>
  </v-col>
</template>

<style scoped>

</style>
