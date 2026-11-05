<script setup>

const props=defineProps({

name:String

})
const emit=defineEmits(['sendingdata'])
function changedata(){

emit('sendingdata','This i sthe chnaged data from childone ')

}





</script>

<template>

<h2>This is the datat from the child one componenet</h2>

<p>Hi {{ name }}</p>


<button @click="changedata">Change Data</button>

</template>