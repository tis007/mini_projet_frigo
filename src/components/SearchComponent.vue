<script setup>
import {ref} from "vue";

const data = ref({
  searchQuery: ''
  }
)

</script>


<template>
  <v-container class="search-card" >
    <v-text-field
      v-model="data.searchQuery"
      label="Rechercher"
      outlined
      solo-inverted
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>

    <v-btn class="btn" block>
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
