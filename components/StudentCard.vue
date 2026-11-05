
<script setup>
const prop = defineProps({
  name: String,
  age: Number
})

// Check received values
console.log("Name:", prop.name)
console.log("Age:", prop.age)
</script>

<template>
  <h2>Student Details</h2>
  <p>Name: {{ prop.name }}</p>
  <p>Age: {{ prop.age }}</p>
</template>
