<script setup>

import {ref} from 'vue'

const count = ref(0)
const size = ref(20)    




function reset() { 

    this.count = 0 

}
 function addAmount(n) {
    
    this.count += n 

}


function grow() { 
    this.size = 30

}


function say(word, event) { 
    
    
    alert(word + ' from ' + event.target.tagName) 

}

 function shrink() { 
    
    this.size = 20 

}


</script>


<template>


<div id="app">
  <!-- Long form -->
  <button v-on:click="count++">Add 1</button>
  <!-- Shorthand @ -->
  <button @click="count--">Take 1</button>
  <!-- Call a method by name -->
  <button @click="reset()">Reset</button>
  <!-- Call a method with an argument -->
  <button @click="addAmount(10)">Add 10</button>
  <!-- Argument AND the event object -->
  <button @click="say('Hi', $event)">Say hi</button>
  <!-- Listen to two events -->
  <div v-on="{ mouseenter: grow, mouseleave: shrink }" :style="{ fontSize: 
size + 'px' }">
    Count: {{ count }}
  </div>
</div>


</template>