<script setup>

import {ref} from 'vue'


const title= ref('Millionaire ')
const firstName=ref('Ana')
const lastName=ref('Lee')
const age=ref('4')
const isHappy=ref(true)

function changetitle(){

title.value="Billionaire"

}




</script>



<template>

<h2>Vue Intro</h2>

<p>I am {{ title }}</p>
<p>The First Name is {{ firstName }}</p>
<p>The Last Name is {{ lastName }}</p>

<p>{{ firstName }} {{ lastName }} is {{ age }} years old </p>

<p>Today I am very {{ isHappy?'Happy':'Sad' }}</p>

<button @click="changetitle">Change Title</button>





</template>