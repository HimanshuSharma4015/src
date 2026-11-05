<script setup>

const props=defineProps({

    name:String
})


 const emit=defineEmits(['senddatas'])


  function changedatas(){



emit('senddatas','the data is from the chils two component')


  }

</script>


<template>

<h2>This is the child two componenet</h2>

<p>The Data is {{ props.name }}</p>



<button @click="changedatas">
    Change Data
</button>


</template>