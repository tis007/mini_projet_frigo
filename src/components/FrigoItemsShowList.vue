<script setup>
import {onMounted, reactive} from "vue";
import FrigoItem from "@/js/FrigoItem";
import FrigoItemCard from "@/components/FrigoItemCard.vue";

const listeFrigoItems = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/19/produits"


function fetchFrigoItems() {
  listeFrigoItems.splice(0, listeFrigoItems.length);
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((dataJson) => {
      listeFrigoItems.splice(0, listeFrigoItems.length - 1);
      for (let item of dataJson) {
        listeFrigoItems.push(new FrigoItem(item.id, item.nom, item.qte, item.photo));
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function fetchForPostPut(fetchUrl, fetchOptions) {
  fetch(fetchUrl, fetchOptions)
    .then((reponse) => {
      return reponse.json();
    })
    .then((dataJson) => {
      if (dataJson.status === 0) {
        console.log(fetchOptions);
      }
      fetchFrigoItems();
    })
    .catch((error) => {
      console.log(error)
      console.log(fetchOptions)
    })
}


function handlerAdd(frigoItem) {
  fetchForPostPut(url, frigoItem.addQtyOption);
}

function handlerRemove(frigoItem) {
  fetchForPostPut(url, frigoItem.removeQtyOption);
}



onMounted(() => {
  fetchFrigoItems();
})
</script>

<template>
  <h3>Items du frigo :</h3><br>
  <v-row dense>
    <FrigoItemCard v-for="frigoItem in listeFrigoItems"
                   :key="`${frigoItem.id}`"
                   :frigoItem="frigoItem"
                   :handlerRemove="handlerRemove"
                   :handlerAdd="handlerAdd"/>


  </v-row>
</template>

<style scoped>

</style>
