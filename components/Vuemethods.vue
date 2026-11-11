<script setup>

import {ref} from 'vue'


const score= ref(0)


const x= ref(0)


function addPoints(amount) {

this.score += amount  

}

function resetGame() {

this.score = 0

}

function shout(text) {

return text.toLowerCase() + '!'


}



function trackMouse(event) {

this.x = event.offsetX

}
 
</script>



<template>



<div id="app">
<p>Score: {{ score }}</p>
<button @click="addPoints(5)">+5</button>
<button @click="addPoints(10)">+10</button>
<button @click="resetGame()">Reset</button>
<!-- Methods can also be called from {{ }} -->
<p>{{ shout('Hello Himanshu') }}</p>
methods box.
<!-- The event object comes for free with a method name -->
<div @mousemove="trackMouse()" style="height:80px; background:#eef">
Mouse x: {{ x }}
</div>
</div>



</template>