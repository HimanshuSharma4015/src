
<script setup>

import Child from './Child.vue'
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'


const customerName="Hi This is Ram Sharma"
const userName = "Himanshu Sharma"
const message=ref(null)
const studentname="Hi Thi sis the data from parent to the child one componenet "
const newName="This is the first element"









function receiveMessage(data) {
  message.value = data
}
</script>

<template>
  <h2>Parent Component</h2>

  <p>This is parent component</p>

  <Child
    :name="userName"
    @send-data="receiveMessage"
  />

  <ChildComp :name="customerName"/>



<ChildOne :name="studentname" @sendingdata="receiveMessage"/>

<ChildTwo :name="newName"  @senddatas="receiveMessage"/>

<p>The Chaneged value is {{ message }}</p>


</template>
