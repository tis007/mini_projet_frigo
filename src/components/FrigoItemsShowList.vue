<script setup>
import {onMounted, reactive} from "vue";
import Produit from "@/js/Produit";
import FrigoItemCard from "@/components/FrigoItemCard.vue";
import AddNewItemPopUp from "@/components/AddNewItemPopUp.vue";

const listeProduits = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/20/produits"
/*
function testGoogleSearch() {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchOptions = {
    method: "GET",
    headers: myHeaders,
  };
  fetch("https://serpapi.com/playground?q=Apple&engine=google_images&ijn=0", fetchOptions)
    .then((response) => {
      return response.json()
    })
    .then((dataJson) => {
      console.log(dataJson)
    })
    .catch((error) => {
      console.log(error)
    })
}
testGoogleSearch()

 */
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
    <FrigoItemCard v-for="produit in listeProduits"
                   :key="`${produit.id}`"
                   :produit="produit"
                   :handlerRemove="handlerRemove"
                   :handlerAdd="handlerAdd"/>
    <AddNewItemPopUp @handlerAddProduits="handlerAddProduits"/>
  </v-row>
</template>

<style scoped>

</style>
