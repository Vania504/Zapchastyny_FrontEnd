<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12" rounded="lg">
          <v-card-title class="text-h5 text-center pa-6">
            Вхід
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                class="mb-4"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Пароль"
                :type="showPassword ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                class="mb-2"
                required
              ></v-text-field>

              <div class="text-right mb-4">
                <a href="#" class="text-decoration-none">Забули пароль ?</a>
              </div>

              <v-btn
                type="submit"
                color="primary"
                size="large"
                block
                :loading="loading"
              >
                Увійти
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({
  layout: false,
  middleware: 'guest'
})

const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    await login(email.value, password.value)
    await router.push('/admin/products')
  } catch (error) {
    console.error('Login error:', error)
    // Тут можна додати повідомлення про помилку
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>

