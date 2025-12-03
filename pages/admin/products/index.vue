<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4">Товари</h1>
    </div>

    <div class="mb-4">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="searchQuery"
            label="Пошук товарів"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            density="comfortable"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-btn
            color="primary"
            prepend-icon="mdi-plus"
            size="large"
            class="mr-2"
            @click="openAddDialog"
          >
            Додати товар
          </v-btn>
        </v-col>
      </v-row>
      <div class="d-flex justify-end mt-2">
        <v-btn
          variant="outlined"
          prepend-icon="mdi-filter"
          @click="showFilter = !showFilter"
        >
          Фільтр
        </v-btn>
      </div>
    </div>

    <v-row>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard
          :product="product"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin'
})

interface Product {
  id: string
  name: string
  category: string
  price: number
  image?: string
}

// Тимчасові дані (замінити на API)
const products = ref<Product[]>([
  {
    id: '1',
    name: 'Гальмівні колодки передні BMW',
    category: 'Гальмівна система',
    price: 1250
  },
  {
    id: '2',
    name: 'Амортизатор передній лівий BMW',
    category: 'Підвіска',
    price: 3200
  },
  {
    id: '3',
    name: 'Гальмівні диски передні Audi (пара)',
    category: 'Гальмівна система',
    price: 2800
  },
  {
    id: '4',
    name: 'Повітряний фільтр двигуна Mercedes',
    category: 'Двигун',
    price: 450
  },
  {
    id: '5',
    name: 'Датчик ABS VW Golf',
    category: 'Електрика',
    price: 850
  },
  {
    id: '6',
    name: 'Амортизатор задній BMW (Б/У)',
    category: 'Підвіска',
    price: 1200
  },
  {
    id: '7',
    name: 'Гальмівні колодки задні Audi',
    category: 'Гальмівна система',
    price: 980
  },
  {
    id: '8',
    name: 'Олійний фільтр Mercedes',
    category: 'Двигун',
    price: 320
  }
])

const searchQuery = ref('')
const showFilter = ref(false)

const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return products.value
  }
  const query = searchQuery.value.toLowerCase()
  return products.value.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  )
})

const openAddDialog = () => {
  // TODO: Відкрити діалог додавання товару
  console.log('Add product')
}

const handleEdit = (product: Product) => {
  // TODO: Відкрити діалог редагування
  console.log('Edit product:', product)
}

const handleDelete = (product: Product) => {
  // TODO: Підтвердити видалення та видалити
  const index = products.value.findIndex((p) => p.id === product.id)
  if (index > -1) {
    products.value.splice(index, 1)
  }
}
</script>

