<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
import { ref, watch } from 'vue'

// 记录当前路由
const route = useRoute()
// 获取路由实例
const router = useRouter()
// 记录当前选择的tab
const active = ref(route.name as string)

watch(active, (newVal) => {
  router.push({
    name: newVal,
  })
})
</script>

<template>
  <RouterView />
  <Tabbar v-model:model-value="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>
