<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import messages from '../assets/message.json'

const route = useRoute()
const message = ref('あけおめ')

console.log(route.query.id)

const loadMessage = (target) => {
  message.value = messages.items.find((item) => {
    return item.id === target
  }).description
}

if (route.query.id) {
  loadMessage(route.query.id)
}
</script>

<template>
  <p>{{ message }}</p>
</template>

<style>
p {
  text-align: center
}
</style>