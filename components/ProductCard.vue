<template>
  <v-card class="product-card" elevation="2">
    <v-card-text class="pa-0">
      <div class="product-image">
        <div class="product-image-placeholder bg-grey-lighten-3 d-flex align-center justify-center" style="height: 200px;">
          <v-icon size="64" color="grey">mdi-package-variant</v-icon>
        </div>
      </div>
      <div class="pa-4">
        <h3 class="text-h6 font-weight-bold mb-2">{{ product.name }}</h3>
        <p class="text-caption text-grey mb-3">{{ product.category }}</p>
        <p class="text-h6 font-weight-bold text-primary mb-4">
          {{ product.price }} грн
        </p>
        <div class="d-flex gap-2">
          <v-btn
            icon
            variant="text"
            size="small"
            color="primary"
            @click="$emit('edit', product)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            icon
            variant="text"
            size="small"
            color="error"
            @click="$emit('delete', product)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
interface Product {
  id: string
  name: string
  category: string
  price: number
  image?: string
}

defineProps<{
  product: Product
}>()

defineEmits<{
  edit: [product: Product]
  delete: [product: Product]
}>()
</script>

<style scoped>
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%;
  background-color: #f5f5f5;
}
</style>

