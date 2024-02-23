<script setup>
import {onMounted, reactive} from "vue";
import Produit from "@/js/Produit";
import FrigoItemCard from "@/components/FrigoItemCard.vue";
import SearchAndAddNewItemPopUp from "@/components/SearchAndAddNewItemPopUp.vue";

const listeProduits = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/20/produits"

function fetchProduits() {
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((dataJson) => {
      listeProduits.splice(0, listeProduits.length);
      for (let produit of dataJson) {
        listeProduits.push(new Produit(produit.id, produit.nom, produit.qte, produit.photo));
      }
      checkIfSomeItemsAreAtZero();
    })
    .catch((error) => {
      console.log(error)
    })
}

function handlerAddProduits(produit) {
  fetchForPostPut(url, produit.postOptions)
}

function fetchForPostPut(fetchUrl, fetchOptions) {
  fetch(fetchUrl, fetchOptions)
    .then((reponse) => {
      return reponse.json();
    })
    .then((dataJson) => {
      if (dataJson.status !== 1) {
        console.log(fetchOptions);
      }
      fetchProduits();
    })
    .catch((error) => {
      console.log(error)
      console.log(fetchOptions)
    })
}
function checkIfSomeItemsAreAtZero() {
  for (let i = listeProduits.length - 1; i >= 0; i--) {
    if (listeProduits[i].qte <=0) {
      handlerDelete(listeProduits[i].id)
    }
  }
}

function handlerDelete(idProduit) {
  const fetchOptionsDelete = {
    method: "DELETE"
  }
fetch(url + "/" + idProduit, fetchOptionsDelete)
  .then((reponse) => {
    return reponse.json();
  })
  .then((dataJson) => {
    if (dataJson.status !== 1) {
      console.log(idProduit + " " + dataJson);
    }
    fetchProduits();
  })
  .then((error) => {
    console.log(error);
  })
}

function handlerAdd(produit) {
  fetchForPostPut(url, produit.addQtyOption);
}

function handlerRemove(produit) {
  fetchForPostPut(url, produit.removeQtyOption);
}


onMounted(() => {
  fetchProduits();
})
</script>

<template>
  <h3>Items du frigo :</h3><br>
  <v-row dense>
    <SearchAndAddNewItemPopUp @handlerAddProduits="handlerAddProduits"/>
    <FrigoItemCard v-for="produit in listeProduits"
                   :key="`${produit.id}`"
                   :produit="produit"
                   :handlerRemove="handlerRemove"
                   :handlerAdd="handlerAdd"/>
  </v-row>
</template>

<style scoped>

</style>
