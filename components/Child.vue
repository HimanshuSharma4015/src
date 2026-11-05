
<script setup>
const props = defineProps({
  name: String
})

const emit = defineEmits(['send-data'])

function sendMessage() {
  emit('send-data', '   t   his is the data from child componenet to parent componenet!')
}
</script>

<template>
  <h2>Hello {{ props.name }}</h2>

  <button @click="sendMessage">
    Send Data to Parent
  </button>
</template>
