

<script setup>
 import { ref } from 'vue'
 


const temperature=ref(20)
const loggedIn=ref(false)




</script>


<template>
 <div id="app">
<input type="number" v-model="temperature"> °C
<p v-if="temperature > 30">
🥵
 Hot! Wear shorts.</p>
<p v-else-if="temperature > 15">
🙂
 Nice! Wear a T-shirt.</p>
<p v-else>
🥶
 Cold! Wear a jacket.</p>


<!-- Group several elements with <template> (it renders nothing itself) -->
<template v-if="loggedIn">
<h3>Welcome back!</h3>
<button @click="loggedIn = false">Log out</button>
</template>
<button v-else @click="loggedIn = true">Log in</button>
</div>

</template>