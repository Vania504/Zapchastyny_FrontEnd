<template>
  <v-card>
    <v-card-title>Ласкаво просимо!</v-card-title>
    <v-card-text>
      <p>Це Vue 3 проект з TypeScript, Composition API та Vuetify</p>
      <v-btn color="primary" @click="increment">
        Лічильник: {{ count }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

