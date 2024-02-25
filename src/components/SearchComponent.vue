<script setup>
import {ref, watch} from "vue";

const searchQuery = ref('')
const emit = defineEmits(['handlerUpdateSearchQuery'])


function emitSearchQuery(newQuery) {
  emit('handlerUpdateSearchQuery', newQuery)
}

watch(searchQuery, (newQuery) => {
  emitSearchQuery(newQuery);
})


</script>


<template>
  <v-container class="search-card" >
    <v-text-field
      v-model="searchQuery"
      label="Rechercher"
      outlined
      solo-inverted
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>

    <v-btn @click="emitSearchQuery(searchQuery)" class="btn" block>
      Rechercher
    </v-btn>

  </v-container>
</template>


<style scoped>
.search-card{
  background-color: rgba(107, 154, 175, 0.65);
}

.btn {
  color: black;
  background-color: #006bb3;
}
</style>
