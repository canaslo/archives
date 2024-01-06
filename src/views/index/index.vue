<template>
  <el-container>
    <!-- 侧边栏 -->
    <Aside
      :isCollapse="isCollapse"
      :menuLink="menuLink"
    />
    <el-container>
      <!-- 顶部栏 -->
      <el-header>
        <Header
          :isCollapse="isCollapse"
          :menuLink="menuLink"
          @toggle="toggle"
        />
      </el-header>
      <!-- 展示页面 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from './components/aside'
import Header from './components/header'
export default {
  name: 'Index',
  components: { Aside, Header },
  data() {
    return {
      /*侧边栏开关*/
      isCollapse: false,
      /*侧边栏数据*/
      success: [
        {
          path: '/auth',
          name: '权限管理',
          icon: 'el-icon-s-check',
          children: []
        },
        {
          path: '/report',
          name: '提报管理',
          icon: 'el-icon-tickets',
          children: []
        },
        {
          path: '/settings',
          name: '设置',
          icon: 'el-icon-setting',
          children: [
            {
              path: '/user',
              name: '用户信息',
              icon: 'el-icon-user',
              children: []
            },
            {
              path: '/basic',
              name: '完善信息',
              icon: 'el-icon-document-add',
              children: []
            }
          ]
        }
      ],
      menuLink: [
        { path: '/', name: '首页', icon: 'el-icon-s-home', children: [] }
      ]
    }
  },
  created() {
    let check = Number(this.$store.state.user.isCheck)
    if (check === 1) {
      this.menuLink = [...this.menuLink, ...this.success]
    } else {
      this.$router.push({ path: '/' })
    }

    check = ''._
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style scoped lang='scss'>
.el-header {
  padding: 10px;
  border-bottom: 2px solid#eeeded;
  background-color: $bg-color-white;
  @include flex-center-start;
}
</style>