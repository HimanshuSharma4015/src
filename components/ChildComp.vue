

<script setup>



const props=defineProps({
    name:String
})

</script>

<template>

<h2>This is the second childs component </h2>
<p>{{ props.name }}</p>


</template>