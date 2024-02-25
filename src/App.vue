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
  background-image: url('assets/frigo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding-left: 30%;
  padding-right: 30%;

}


.page {
  min-height: 100vh;
  text-align: center;
}
</style>
<script setup>
import FrigoPage from "@/pages/FrigoPage.vue";
</script>
