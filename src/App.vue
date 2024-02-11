<template>
  <v-app>
    <v-app-bar
      color="primary"
      density="compact">
      <v-app-bar-title>Application recherche films</v-app-bar-title>
      <v-btn to="/FrigoPage">FrigoPage</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="page">
        <!-- les "composant view" s'afficheront ici -->
        <RouterView/>
      </v-container>
    </v-main>

  </v-app>
</template>



<style scoped>
.page {
  min-height: 100vh;
  text-align: center;
}
</style>
