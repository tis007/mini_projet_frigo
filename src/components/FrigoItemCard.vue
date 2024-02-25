<script setup>
defineProps(["produit", "handlerAdd", "handlerRemove"]);

</script>

<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
    lg="2"
    xl="2">
    <v-card class="card">
      <v-img
        :src="`${produit.photo}`"
        :alt="`${produit.nom}` + ' image'"
        :title="`${produit.nom}`"
        height="200px"
        cover
      >
        <v-card-item v-if="produit.photo === ''" class="centered">{{ produit.nom }}</v-card-item>
      </v-img>
      <v-card-title class="card-title" >
        <v-container>
          <v-row>
            <v-col cols="12">
              {{produit.qte}} - {{ produit.nom }}
              <br>
              <v-btn @click="handlerRemove(produit)" class="v-btn--small">-</v-btn>
              <v-btn @click="handlerAdd(produit)" class="v-btn--small">+</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
    </v-card>
  </v-col>
</template>

<style scoped>
 .card-title{
   background-color: rgba(107, 154, 175, 0.65);
}
 .card {
   background-color: rgba(0, 0, 0, 0);
 }

 .centered {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 30px;
 }
</style>
