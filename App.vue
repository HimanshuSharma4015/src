
<script setup>
import { ref } from 'vue';

import Fruits from './components/Fruits.vue';

// No imports are needed here because
// RouterLink and RouterView are globally available

const message = ref('');

function showMessage() {
  message.value = 'Your pizza is ordered!';
}



</script>

<template>
  <h1>My Vue Application</h1>

  <!-- Home Page Link -->
  <RouterLink to="/">Home</RouterLink>

  <br /><br />

  <!-- Student Page Link -->
  <RouterLink to="/student">Student Page</RouterLink>

  <br /><br />

  <!-- Counter Page Link -->
  <RouterLink to="/counter">Counter Page</RouterLink>
 <br /><br />

    <RouterLink to="/BasicVue">Basic Vue Page</RouterLink>




    <br /><br />

    <RouterLink to="/HideShowPassword">Hide/Show Password</RouterLink>


       <br /><br />

    <RouterLink to="/Form">Form</RouterLink>
       <br /><br />

    <RouterLink to="/ToDo">ToDo</RouterLink>


         <br /><br />

    <RouterLink to="/ProductListing">Product Listing</RouterLink>


             <br /><br />

    <RouterLink to="/ShoppingCart">Shopping Cart</RouterLink>


              <br /><br />

    <RouterLink to="/Parent">User Card Parent</RouterLink>

              <br /><br />

    <RouterLink to="/Child">User Card Child</RouterLink>

             <br /><br />

    <RouterLink to="/HTTPRequest">HTTPRequest</RouterLink>

             <br /><br />

    <RouterLink to="/FoodItems">Food Items</RouterLink>

             <br /><br />

    <RouterLink to="/VueIntro">Vue Intro</RouterLink>

             <br /><br />

    <RouterLink to="/VueDirective">Vue Directive</RouterLink>



  <hr />




  <RouterView />



<!-- <Fruits/> -->


<FoodCard @order="showMessage" />


<!-- 
  <p>{{ message }}</p> -->




</template>
