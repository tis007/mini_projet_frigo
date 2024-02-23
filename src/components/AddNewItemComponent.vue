<script setup>

import {ref} from "vue";
import Produit from "@/js/Produit";

const emit = defineEmits(["handlerAddProduits"]);

const data = ref({
  dialog: false,
  itemName: '',
  quantity: '',
  photoUrl: ''
});
function filterInput(inputEvent) {

  if (!inputEvent.target.value.length && inputEvent.key === '-') {
    return true;
  }

  if (!Number.isInteger(Number(inputEvent.key))) {
    // Of course, you can choose any other method to check if the key
    // pressed was a number key, for ex. check if the event.keyCode is
    // in range 48-57.
    inputEvent.preventDefault();
  }

  return true;
}




function addProduit() {
  let produitToAdd = new Produit(-1, data.value.itemName, data.value.quantity, data.value.photoUrl);
  emit('handlerAddProduits', produitToAdd);
  data.value.itemName = '';
  data.value.quantity = '';
  data.value.photoUrl = '';

  data.value.dialog = false
}
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="data.dialog" max-width="1024">
      <template v-slot:activator="{ props }">
        <v-btn class="btn" v-bind="props" fluid >Ajouter un produit</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Ajouter un nouveau produit</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="9" md="6">
                <v-text-field v-model="data.itemName" label="Nom du produit *" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="9" md="6">
                <v-text-field v-model="data.quantity" label="Quantitée *" required type="number" min="1"
                              @keydown="filterInput"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="data.photoUrl" label="photo du produit"
                              hint="url de la photo"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="data.dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="addProduit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>

.btn{
  background-color: #006bb3;
  margin: 10px;
  padding: 0;
  width: 100%;
}
</style>
