<script setup>
 import {ref} from 'vue'


const name=ref('Ram')
const isRaining=ref(false)
const toys=ref(

 ['Ball', 'Car', 'Robot']
)



const count=ref(0)

</script>


<template>
<!-- 
v-if condition -->
<h4> vif condition</h4>




<p v-if="isRaining">Take a Umbrella</p>

<p v-else >Umbrella is not needed</p>

<!-- v-for condition -->

<h4> v for condition</h4>

<ul>
<li v-for="toy in toys">{{ toy }}</li>
</ul>

<h4>Counter  </h4>

<p>The Count is {{ count }}</p>
<button @click="count++">Increase Count</button>
<button @click="count--" :disabled="count===0">Decrease Count</button>
<button @click="count=0" :disabled="count===0">Reset Count</button>





<h4>V Model</h4>

<input  v-model="name" />

<p>Hi , This is {{ name }}</p>


</template>