<script setup>

import AddNewItemComponent from "@/components/AddNewItemComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";

const emit = defineEmits(['handlerAddProduits', 'handlerUpdateSearchQuery']);

function handlerAddProduits(produit) {
  emit('handlerAddProduits', produit);
}

function handlerUpdateSearchQuery(searchQuery) {
  emit('handlerUpdateSearchQuery', searchQuery)
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
      <SearchComponent @handlerUpdateSearchQuery="handlerUpdateSearchQuery"/>

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
