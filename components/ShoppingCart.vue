<script setup>
import { ref, computed } from 'vue'

const cart = ref([
  { id: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { id: 2, name: 'Mouse', price: 500, quantity: 2 },
  { id: 3, name: 'Keyboard', price: 1500, quantity: 1 }
])

const total = computed(() => {
  return cart.value.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)
})
</script>

<template>
  <h2>Shopping Cart</h2>

  <div v-for="item in cart" :key="item.id">
    {{ item.name }} - ₹{{ item.price }}

    <input type="number" min="1" v-model.number="item.quantity" />
  </div>

  <h3>Total: ₹{{ total }}</h3>
</template>