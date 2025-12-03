<template>
  <v-app>
    <v-app-bar color="white" elevation="1">
      <v-app-bar-title class="text-h6 font-weight-bold">
        AutoParts
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer permanent width="280" color="grey-lighten-4">
      <v-list nav density="comfortable">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          :active="isActive(item.to)"
          :color="isActive(item.to) ? 'primary' : ''"
          :class="isActive(item.to) ? 'bg-primary text-white' : ''"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list nav density="comfortable">
          <v-list-item
            prepend-icon="mdi-logout"
            title="Вийти"
            @click="handleLogout"
            class="text-error"
          ></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="pa-6">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({
  middleware: 'admin'
})

const route = useRoute()
const router = useRouter()
const { logout } = useAuth()

const menuItems = [
  { title: 'Товари', icon: 'mdi-package-variant', to: '/admin/products' },
  { title: 'Категорії', icon: 'mdi-tag', to: '/admin/categories' },
  { title: 'Автомобілі', icon: 'mdi-car', to: '/admin/cars' },
  { title: 'Замовлення', icon: 'mdi-clipboard-list', to: '/admin/orders' }
]

const isActive = (path: string) => {
  return route.path === path
}

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped>
:deep(.v-list-item--active) {
  background-color: rgb(var(--v-theme-primary)) !important;
  color: white !important;
}

:deep(.v-list-item--active .v-icon) {
  color: white !important;
}
</style>

