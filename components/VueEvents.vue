<script setup>
import {ref} from 'vue'



const likes= ref(0)
const color=ref('lightgrey')
const typed=ref('') 




</script>

<template>
    <div id="app">
<!-- click -->
<button @click="likes++">
❤
 {{ likes }}</button>
<!-- mouseover / mouseleave -->
<div
@mouseover="color = 'lightgreen'"
@mouseleave="color = 'lightgrey'"
:style="{ background: color, padding: '20px' }">
Hover over me
</div>
<!-- input: fires on every key typed -->
<input @input="typed = $event.target.value">
<p>You typed: {{ typed }}</p>
<!-- keyup on Enter -->
<input @keyup.enter="message = 'You pressed Enter!'">
<p>{{ message }}</p>
</div>

</template>





