<script setup>
import { ref } from 'vue'

const password = ref('')
const showPassword = ref(false)
</script>

<template>
  <h2>Password Example</h2>

  <input
    v-model="password"
    :type="showPassword ? 'text' : 'password'"
    placeholder="Enter password"
  />

  <button @click="showPassword = !showPassword">
    {{ showPassword ? 'Hide' : 'Show' }}
  </button>

  <p v-if="showPassword">
    Your password is visible!
  </p>
</template>