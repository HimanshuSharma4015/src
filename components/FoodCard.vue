
<template>
  <button @click="$emit('order')">
    Order Pizza
  </button>
</template>

<script setup>
defineEmits(['order']);
</script>
