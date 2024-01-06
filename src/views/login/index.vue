<template>
  <div class="login">
    <el-container>
      <el-main>
        <h1>档案管理系统</h1>
        <div class="box">
          <div class="bg">
            <img
              src="~@/assets/images/login_left.png"
              alt=""
            >
          </div>
          <div class="form">
            <h3>系统账户登录</h3>
            <el-form
              ref='formData'
              :model='formData'
              :rules='rules'
              auto-complete='on'
            >
              <el-form-item
                label
                prop='username'
              >
                <div class='form-box'>
                  <span
                    slot='prefix'
                    class='iconfont icon-user'
                  ></span>
                  <el-input
                    v-model='formData.username'
                    auto-complete='on'
                    placeholder='请输入用户名'
                  />
                </div>
              </el-form-item>
              <el-form-item
                label
                prop='password'
              >
                <div class='form-box'>
                  <span class='iconfont icon-password1'></span>
                  <el-input
                    v-model='formData.password'
                    :type="isPwd ? 'text' : 'password'"
                    autocomplete='on'
                    placeholder='请输入密码'
                    @keyup.native.enter='login'
                  />
                  <span
                    :class="isPwd ? 'icon-zhengyan' : 'icon-Eyesclosed'"
                    class='iconfont'
                    @click='isPwd = !isPwd'
                  ></span>
                </div>
              </el-form-item>
              <el-button
                :loading='loading'
                type='primary'
                @click.native.prevent='login'
              >登录</el-button>
            </el-form>
            <div class="register">
              <router-link :to="{name: 'Register'}">还没有账号？</router-link>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    const validate = (rule, val, cb) => this.validate(rule, val, cb)
    return {
      loading: false,
      formData: {
        username: '',
        password: ''
      },
      isPwd: false,
      rules: {
        password: [
          {
            required: true,
            validator: validate,
            trigger: 'blur',
            message: '请输入密码'
          }
        ],
        username: [
          {
            required: true,
            validator: validate,
            trigger: 'blur',
            message: '请输入用户名'
          }
        ]
      }
    }
  },
  methods: {
    // 登录
    login() {
      this.$refs.formData.validate((valid) => {
        /* { Boolean } valid 校验是否通过 */
        if (!valid) {
          this.$tools.hint('error', '用户名或密码错误', 3)
          return false
        } else {
          this.isLoading(true)
          // this.setUserStore({
          //   name: 'test',
          //   token: 'custom token',
          //   isCheck: true,
          //   avatar: '',
          //   username: 'test',
          //   roles: ['admin']
          // })
          this.isLoading(false)
          this.$router.push({ path: '/' })
          // this.$post('/login', this.formData)
          //   .then((res) => {
          //     const {name, token, icons, isCheck, list, username} = res
          //     this.setUserStore({
          //       name,
          //       token,
          //       isCheck,
          //       avatar: icons || '',
          //       username,
          //       roles: list || []
          //     })
          //     this.isLoading(false)
          //     this.$router.push({path: '/'})
          //   })
          //   .catch((err) => {
          //     this.isLoading(false)
          //     console.log('请求失败数据', err)
          //   })
        }
      })
    },
    /**
     * @description 添加用户数据到缓存及Vuex
     * @param {Object} data
     */
    setUserStore(data) {
      for (const key in data) {
        this.$store.state.user[key] = data[key]
        this.$token.setToken(key, data[key])
      }
    },
    /**
     * @description 切换登录加载
     * @param {Boolean} bl 显示状态
     */
    isLoading(bl) {
      this.loading = bl
    },
    /**
     * @description 表单校验
     * @param { Object } rule 当前验证项规则
     * @param { String } value 当前验证项数据
     * @param { Function } callback 当前验证项回调函数
     */
    validate(rule, value, callback) {
      if (rule.field === 'password' && value.length < 6) {
        callback(new Error('密码不少于六位数'))
      } else if (value.length === 0) {
        callback(new Error(rule.message))
      } else {
        callback()
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.el-button {
  width: 100%;
}

::v-deep .el-input__inner {
  border: 0;
}
.login {
  height: 100%;
  .el-main {
    padding-top: 7.2rem;
    @include flex-column-start;
    @include bg-img-norepeat-position-size;
    background-image: url('~@/assets/images/bg.png');
    h1 {
      font-size: $text-h1;
      font-weight: 800;
      text-align: center;
      letter-spacing: 1rem;
      color: $text-color;
    }
    .box {
      width: 80rem;
      height: 50rem;
      margin-top: 4rem;
      @include flex-center-between;
      border-radius: 1rem;
      background: {
        color: rgba(255, 255, 255, 0.8);
      }
      .bg {
        width: calc(50% - 5rem);
        padding: 0 2.5rem;
      }
      .form {
        width: calc(50% - 6rem);
        padding-left: 6rem;

        h3 {
          font: {
            size: $text-h3;
          }
          letter-spacing: 0.2rem;
          color: $text-color-bright-blue;
        }
        .el-form {
          width: 30rem;
          height: 20rem;
          margin-top: 3rem;

          .form-box {
            @include flex-center-between;
            background-color: $bg-color-white;
            box-shadow: 0 1px 1px rgb(158 168 184 / 50%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;

            .iconfont {
              margin: 0 0.5rem;
              font-size: 3rem;
              color: rgba(151, 151, 151, 1);

              &.icon-password1 {
                padding-left: 0.6rem;
                font-size: 2.2rem;
              }

              &.icon-zhengyan,
              &.icon-Eyesclosed {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .register {
      @include flex-center-end;

      a {
        margin-right: 4rem;
        font-size: $text-h6;
        color: $text-color-grey;
        cursor: pointer;
      }
    }
  }
}
</style>
