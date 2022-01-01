<script setup>
import Message from './components/Message.vue'
</script>

<template>
  <h3>A Happy New Year!</h3>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');

body {
  font-family: 'Yomogi', cursive;
}

h3 {
  font-size: 1.4rem;
  text-align: center;
  color: #98a112
}
</style>
