<template>
  <el-affix>
    <el-menu
      class="menu"
      mode="horizontal"
      router
      :default-active="route.path"
    >
      <div class="logo">WDMD 2025</div>
      <div class="menu-right">
        <el-menu-item index="/">HOME</el-menu-item>
        <el-menu-item index="/program">PROGRAM</el-menu-item>
        <el-menu-item index="/papers">CALL FOR PAPERS</el-menu-item>
        <el-menu-item>
          SUBMISSION
        </el-menu-item>
        <el-menu-item index="/participation">CALL FOR PARTICIPATION</el-menu-item>
        <el-menu-item index="/keynotes">KEYNOTES</el-menu-item>
        <el-menu-item index="/committees">COMMITTEES</el-menu-item>
        <!-- <el-menu-item index="/attending">ATTENDING</el-menu-item> -->
      </div>
    </el-menu>
  </el-affix>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="less" scoped>
.menu {
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 58px;
    line-height: 58px;
  }

  .menu-right {
    display: flex;

    .link:hover {
      background-color: transparent;
    }
  }

  :deep(.el-sub-menu__hide-arrow) {
    .el-tooltip__trigger {
      border-bottom: none;
      padding-right: 0;
    }
  }
}
</style>