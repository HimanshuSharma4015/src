<script setup>
import { ref } from 'vue'

const count = ref(0)

function increase() {
  count.value++
}

function decrease() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <h2>Counter: {{ count }}</h2>

  <button @click="increase">+</button>
  <button @click="decrease">-</button>
  <button @click="reset">Reset</button>
</template>