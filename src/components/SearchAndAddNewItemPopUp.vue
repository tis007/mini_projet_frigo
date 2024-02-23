<script setup>

import AddNewItemComponent from "@/components/AddNewItemComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
const emit = defineEmits(['handlerAddProduits']);


function handlerAddProduits(produit) {
  emit('handlerAddProduits', produit);
}
</script>

<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
    lg="2"
    xl="2">
    <v-card class="card">
      <SearchComponent/>

    </v-card>
    <v-card class="card">

      <AddNewItemComponent @handlerAddProduits="handlerAddProduits"/>
    </v-card>
  </v-col>
</template>


<style scoped>
.card {
  background-color: rgba(0, 0, 0, 0);
  margin: 10px;
}
</style>
