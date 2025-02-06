<template>
  <div class="banner">
    <div class="background"></div>
    <div class="text">
      <h2 class="title font-lato">WDMD 2025: 4th International Workshop on </h2>
      <h2 class="title font-lato">Dependability Modeling and Design</h2>
      <div class="subtitle">Co-located with <a href="https://dsn2025.github.io/index.html" target="_blank">DSN 2025</a></div>
      <div class="tip font-merri">Naples, Italy, June 23, 2025</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.banner {
  height: 40rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: url('@/assets/image/t-selin-erkan-1.jpg') no-repeat center / cover;

    &::before {
      content: '';
      display: block;
      background-color: rgba(33, 33, 33, 1);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.3;
    }
  }
  
  .text {
    max-width: 100rem;
    padding: 0 3rem;
    color: #fff;
    .title {
      font-size: 4rem;
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
    }
    .subtitle {
      text-align: center;
      margin-top: 1rem;
      font-size: 2.8rem;
      color: #f3f3f3;
      font-style: italic;

      a {
        color: #fff;
        text-decoration: underline;
      }
    }
    .tip {
      margin-top: 1.6rem;
      text-align: center;
      font-size: 2rem;
    }
  }
}
</style>