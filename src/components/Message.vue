<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import messages from '../assets/message.json'

const route = useRoute()
const message = ref('あけおめ')

onMounted(() => {
  if (route.params.id) {
    loadMessage(route.params.id)
  }
})

const loadMessage = (target) => {
  message.value = messages.find((item) => {
    return item.id === target
  })
}
</script>

<template>
  <p>{{ message }}</p>
</template>