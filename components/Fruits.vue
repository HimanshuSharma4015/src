
<template>
  <div>
    <FoodCard
      v-for="food in foods"
      :key="food.id"
      :food-name="food.name"
    />
  </div>
</template>

<script setup>
import FoodCard from './FoodCard.vue';

const foods = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Burger' },
  { id: 3, name: 'Pasta' }
];
</script>
