<script setup>

defineProps(["produit", "handlerAdd", "handlerRemove", "handlerDelete"]);

</script>

<template>
  <v-col
    cols="12"
    sm="6"
    md="3"
    lg="2"
    xl="2">
    <v-card class="card" width="150">
      <v-img class="image"
        :src="`${produit.photo}`"
        :alt="`${produit.nom}` + ' image'"
        :title="`${produit.nom}`"
        height="200px"
        cover
      >
        <v-card-item v-if="produit.photo === ''" class="centered">{{ produit.nom }}</v-card-item>
        <v-btn @click="handlerDelete(produit.id)" class="top-right">
          <v-icon
            icon="mdi-delete"
          />
        </v-btn>
      </v-img>
      <v-card-title class="card-title">
        <v-container>
          <v-row>
            <v-col cols="12">
              {{ produit.qte }} - {{ produit.nom }}
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
.card-title {
  background-color: rgba(107, 154, 175, 0.65);

}

.card {
  background-color: rgba(0, 0, 0, 0);
  justify-content: center;
  padding: 0;
  margin: 0;
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(107, 154, 175, 0.65);

}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}
</style>
