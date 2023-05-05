<script setup lang="ts">
import type { ISearchRecommend } from '@/types'
interface IProps {
  recommends: ISearchRecommend[]
}
defineProps<IProps>()
</script>

<template>
  <div class="home-top">
    <div class="top">
      <van-icon name="location-o" class="location-icon" />
      <div class="location">武汉理工大学鉴湖校区</div>
      <van-icon name="shopping-cart-o" class="shopcart-icon" />
      <van-icon name="chat-o" class="comments-icon" />
    </div>
    <VanSearch
      shape="round"
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
      placeholder="茶颜悦色"
      ><template #right-icon><div>搜索</div></template></VanSearch
    >
    <div class="search-recommend">
      <div v-for="v in recommends" :key="v.value" class="tag">{{ v.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: white;
  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0px 10px;
    font-size: 16px;
    .location-icon {
      font-size: 20px;
    }
    .location {
      flex: 1;
    }
    .shopcart-icon {
      font-size: 20px;
    }
    .comments-icon {
      font-size: 20px;
      margin-left: 10px;
    }
  }
  .search-recommend {
    display: flex;
    padding: 0 10px 8px;
    .tag {
      font-size: 12px;
      border-radius: 10px;
      background: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>
