
<script setup>


 const fruits = ref(['Apple', 'Banana', 'Orange'])
 const pets = ref([
   { id: 1, name: 'Max', type: 'Dog' },
   { id: 2, name: 'Whiskers', type: 'Cat' },
   { id: 3, name: 'Buddy', type: 'Dog' }
 ])

 const book = ref({
   title: 'The Great Gatsby',pages:32})




</script>


<template>

<div id="app">
<!-- Loop over an array -->
<ul>
<li v-for="fruit in fruits">{{ fruit }}</li>
</ul>
<!-- Get the index too -->
<p v-for="(fruit, index) in fruits">{{ index + 1 }}. {{ fruit }}</p>
<!-- Loop over objects with a unique :key -->
<div v-for="pet in pets" :key="pet.id">
{{ pet.name }} is a {{ pet.type }}
</div>

<!-- Loop over an object's properties -->
<p v-for="(value, key) in book">{{ key }}: {{ value }}</p>
<!-- Loop over a number range (1 to 5) -->
<span v-for="n in 5">
⭐
</span>


<button @click="fruits.push('Kiwi')">Add Kiwi</button>

</div>


</template>