<template>
  <el-container>
    <el-main>
      <div class="box">
        <img
          src="@/assets/images/404.png"
          draggable="false"
          oncontextmenu="return false"
          alt=""
        />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'Default',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang='scss'>
.el-main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 60rem;
  }
}
</style>