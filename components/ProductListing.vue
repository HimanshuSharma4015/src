<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const products = ref([
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 20000 },
  { id: 3, name: 'Keyboard', price: 1500 },
  { id: 4, name: 'Mouse', price: 500 }
])

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name.toLowerCase().includes(
      search.value.toLowerCase()
    )
  )
})
</script>

<template>
  <h2>Product Search</h2>

  <input v-model="search" placeholder="Search product" />

  <ul>
    <li v-for="product in filteredProducts" :key="product.id">
      {{ product.name }} - ₹{{ product.price }}
    </li>
  </ul>


<p>Total {{filteredProducts.length }} Entries Found</p>


  <p v-if="filteredProducts.length === 0">
    No products found!
  </p>

  <p v-if="filteredProducts.length==1">
    Only 1 Product Found! 
  </p>


</template>