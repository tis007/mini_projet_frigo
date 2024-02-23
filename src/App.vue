<template>
  <v-app class="app">

<!--    <v-app-bar-->
<!--      color="primary"-->
<!--      density="compact">-->
<!--      <v-app-bar-title>Application recherche films</v-app-bar-title>-->
<!--      <v-btn to="/FrigoPage">FrigoPage</v-btn>-->
<!--    </v-app-bar>-->

    <v-main>
      <v-container class="page">
        <FrigoPage/>
<!--        <RouterView/>-->
      </v-container>
    </v-main>

  </v-app>
</template>



<style scoped>
.page {
  background-image: url('https://st.depositphotos.com/1002539/2687/i/450/depositphotos_26873645-stock-photo-empty-fridge.jpg'); /* Remplacez 'background-image.jpg' par le chemin de votre image */
  background-size: cover; /* Ajuste la taille de l'image pour couvrir tout l'arrière-plan */
  background-position: center; /* Centre l'image horizontalement et verticalement */
  background-repeat: no-repeat;
}

.page {
  min-height: 100vh;
  text-align: center;
}
</style>
<script setup>
import FrigoPage from "@/pages/FrigoPage.vue";
</script>
