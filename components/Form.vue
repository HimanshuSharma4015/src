<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const age = ref('')

function registerStudent() {
  alert('Registration successful: ' + name.value)
}
</script>

<template>
  <h2>Student Registration</h2>

  <form @submit.prevent="registerStudent">

    <input v-model="name" placeholder="Enter name" />

    <br /><br />

    <input v-model="email" placeholder="Enter email" />

    <br /><br />

    <input v-model="age" type="number" placeholder="Enter age" />

    <br /><br />

    <button type="submit">Register</button>

  </form>


  <p>Name: {{ name }}</p>
  <p>Email: {{ email }}</p>
  <p>Age: {{ age }}</p>


</template>