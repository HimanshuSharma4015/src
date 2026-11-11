
<template>
  <h2>Welcome to my {{restaurant}} Restaurant!</h2>

  <button @click="changeName">Change Name</button>
</template>


<script setup>
import {ref} from 'vue'

const restaurant =ref('Thousand Spices')        


function changeName(){
    
restaurant.value="Red Mango"

}

</script>


