
<template>
  <h2>Food Menu</h2>

  <button @click="loadFood">
    Load Menu
  </button>

  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>

 <table v-else border="1">
  <thead>
    <tr>
      <th>Sr. No.</th>
      <th>Food Name</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="(food, index) in foods" :key="food">
      <td>{{ index + 1 }}</td>
      <td>{{ food }}</td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
import { ref } from 'vue';

const foods = ref([]);
const loading = ref(false);
const error = ref('');

async function loadFood() {
  loading.value = true;
  error.value = '';

  try {
    
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    if (!response.ok) {
      throw new Error('Could not load the menu');
    }

    const data = await response.json();

    foods.value = data.map(user => user.email);
  } catch (err) {
    error.value = 'Something went wrong!';
  } finally {
    loading.value = false;
  }
}
</script>
