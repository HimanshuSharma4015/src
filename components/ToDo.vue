<script setup>
import { ref } from 'vue'

const newTask = ref('')

const tasks = ref([
  'Learn Vue.js',
  'Practice JavaScript',
  'Learn components'
])

function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

function deleteTask(index) {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <h2>My Todo List</h2>

  <input v-model="newTask" placeholder="Enter task" />

  <button @click="addTask">Add Task</button>

  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}

      <button @click="deleteTask(index)">
        Delete
      </button>
    </li>
  </ul>
</template>