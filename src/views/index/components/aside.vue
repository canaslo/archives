<template>
  <el-aside width="auto">
    <el-menu
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="defaultActive"
      :router="true"
      background-color="#3947B2"
      text-color="#fff"
    >
      <div class="logo">
        <img
          alt=""
          src="~@/assets/images/logo.png"
        />
      </div>
      <template v-for="item in menuLink">
        <el-menu-item
          v-if="item.children.length === 0"
          :key="item.path"
          :index="item.path"
        >
          <i :class="item.icon" />
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu
          v-if="item.children.length > 0"
          :key="item.path"
          :index="item.path"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="option in item.children">
              <el-menu-item
                :key="option.path"
                :index="option.path"
              >
                <template slot="title">
                  <i
                    slot="title"
                    :class="option.icon"
                  ></i>
                  <span slot="title">{{ option.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: 'Aside',
  props: {
    isCollapse: Boolean,
    menuLink: Array
  },
  data() {
    return {
      defaultActive: '/'
    }
  },
  watch: {
    menuLink(val) {
      console.log(val)
    }
  },
  created() {
    this.defaultActive = this.$route.path
  }
}
</script>
<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-aside {
  height: 100vh;
  transition: width 2s ease;

  .el-menu {
    height: 100%;

    .logo {
      width: 100%;
      margin: 2rem 0;
      @include flex-center;

      img {
        width: 90%;
      }
    }

    &-item i {
      color: $text-color-white;
    }

    .is-active {
      background-color: $bg-color-white;

      i {
        color: $text-color-bright-blue;
      }
    }
  }
}
</style>