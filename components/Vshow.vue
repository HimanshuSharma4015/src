<script setup>

 import { ref } from 'vue'


const showMenu = ref(false)



</script>

<template>
    <div id="app">
<button @click="showMenu = !showMenu">Toggle menu</button>
<!-- Stays in the page; Vue sets style="display: none" when false -->
<ul v-show="showMenu">
<li>Home</li>
<li>Games</li>
<li>Settings</li>
</ul>
<!-- Compare: v-if removes the element entirely -->
<p v-if="showMenu">I am added and removed (v-if)</p>
<p v-show="showMenu">I am only hidden (v-show)</p>
</div>
</template>