<template>
  <div class="common-layout">
    <TheHeader />
    <TheBanner />

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue';
import TheBanner from '@/components/TheBanner.vue';
</script>

<style lang="less" scoped>
.common-layout {
  .container {
    max-width: 100rem;
    margin: 0 auto;
    padding: 2.4rem 3rem;
  }
}
</style>