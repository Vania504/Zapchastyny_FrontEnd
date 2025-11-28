<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-title>Zapchastyny</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <HelloWorld />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

