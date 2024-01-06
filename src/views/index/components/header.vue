<template>
  <div id="header">
    <div class="left">
      <div class="toggle">
        <i
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="$emit('toggle')"
        />
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in matched"
          :key="item.meta.name[0]"
        >
          {{ item.meta.name[0] }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <div class="avatar"><el-avatar
          :size="38"
          :src="url"
        ></el-avatar></div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/">主页</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    isCollapse: Boolean,
    menuLink: Array
  },
  data() {
    const match = this.$route.matched.filter((item) => item.path !== '')
    return {
      url: '',
      username: '',
      checkData: {
        0: '待审核',
        1: '已通过'
      },
      matched: match
    }
  },
  watch: {
    $route(data) {
      this.matched = data.matched.filter((item) => item.path !== '')
    }
  },
  created() {
    this.setUserData()
  },
  methods: {
    /**
     * @description 设置顶部栏用户头像及名称权限
     */
    setUserData() {
      const { avatar, username, isCheck } = this.$store.state.user
      this.url = avatar === '' ? this.$base64.avatar : avatar
      this.username = `${username || '用户'}(${
        this.checkData[isCheck] || '未通过'
      })`
    },
    /**
     * @description 下拉菜单事件触发
     */
    handleCommand(command) {
      if (command !== '/') {
        this[command]()
      } else {
        this.$route.path !== command && this.$router.push({ path: command })
      }
    },
    /**
     * @description 退出登录
     * @description 清空用户信息
     */
    logout() {
      const cookies = [
        'name',
        'username',
        'roles',
        'avatar',
        'isCheck',
        'token'
      ]
      cookies.map((item) => this.$token.delToken(item, ''))
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
<style scoped lang='scss'>
#header {
  width: 100%;
  @include flex-center-between;
  .left,
  .right {
    @include flex-center-start;
  }
  .toggle {
    width: 6rem;
    font-size: 3rem;
    cursor: pointer;
  }
  .right {
    margin-right: 2rem;
    .avatar {
      margin-right: 1.5rem;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: $text-color-bright-blue;
  font-size: $text-h5;
}
.el-icon-arrow-down {
  font-size: $text-h5;
}
</style>