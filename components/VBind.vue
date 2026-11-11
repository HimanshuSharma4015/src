
<script setup>
import { ref } from 'vue'

// Reactive variables
const imageUrl = ref('https://placehold.co/150')
const imageText = ref('A grey box')

const link = ref('https://vuejs.org')

const size = ref(16)

const isLocked = ref(true)

const inputSettings = ref({
  type: 'text',
  placeholder: 'Type here',
  maxlength: 10
})

// Increase font size
function increaseSize() {
  size.value += 5
}
</script>

<template>
  <div id="app">

    <!-- Long form attribute binding -->
    <img :src="imageUrl" :alt="imageText">

    <!-- Shorthand attribute binding -->
    <a :href="link">Go to Vue docs</a>

    <!-- Dynamic style binding -->
    <div :style="{ fontSize: size + 'px' }">
      I grow!
    </div>

    <button @click="increaseSize">
      Bigger
    </button>

    <!-- Boolean attribute binding -->
    <button :disabled="isLocked">
      Secret button
    </button>

    <!-- Bind multiple attributes at once -->
    <input v-bind="inputSettings">

  </div>
</template>
