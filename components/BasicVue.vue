<script setup>
import { ref } from 'vue'
import Welcome from './Welcome.vue';

const name = ref('Himanshu')

function changeName() {
  name.value = 'Developer'
}
</script>

<template>
  <h1>Hello, {{ name }}!</h1>

  <button v-on:click="changeName">
    Change Name
  </button>


<Welcome/>

</template>