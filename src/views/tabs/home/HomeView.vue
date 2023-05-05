<script setup lang="ts">
import TheTop from './components/TheTop.vue'

const recommends = [
  {
    value: 1,
    label: '牛腩',
  },
  {
    value: 2,
    label: '沙拉',
  },
]
</script>

<template>
  <div class="home-page"><TheTop :recommends="recommends" /></div>
</template>

<style></style>
