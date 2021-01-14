<!-- 登录页面 -->
<template>
  <div class="main">
      <!-- 导航栏 -->
      <van-sticky>
      <div>
        <van-nav-bar title="登录" left-text="首页" right-text="注册" @click-left="$router.push('/')" @click-right="$router.push('/register')" click-left="$router.push('/')"></van-nav-bar>
      </div>
      </van-sticky>
      
      <!--logo-->
      <div class="logo-div">
          <van-image  :src="require('@/assets/login-logo.png')" />
      </div>

      <!--表单-->
      <div class="form-div">
          <van-cell-group>
            <van-field
                v-model="username"
                clearable
                label="用户名"
                left-icon="user-circle-o"
                placeholder="请输入用户名"
            />
            <van-field
                v-model="password"
                type="password"
                clearable
                label="密码"
                left-icon="cluster-o"
                placeholder="请输入密码"
            />
          </van-cell-group>
      </div>

      <!--按钮-->
      <div class="btn-div">
          <van-button type="primary">登录</van-button>
          <van-button type="warning" @click="$router.push('/register')">前往注册</van-button>
      </div>
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  name: 'Login',
  data () {
    return {
        username: '',
        password: ''
    };
  },

  components: {
      [NavBar.name]: NavBar
  },

  computed: {},

  mounted() {},

  methods: {},
  created() {}
}

</script>
<style lang='scss' scoped>
.main {
    .logo-div {
        width: 100%;
        height: 5rem;
        text-align: center;
        background-color: white;
        .van-image {
            width: 4rem;
            height: 3rem;
            margin-top: 1rem;
        }
    }
    .form-div {
        .van-field {
            line-height: 1rem;
        }
    }
    .btn-div {
        margin-top: 1rem;
        width: 100%;
        text-align: center;
        .van-button {
            margin-top: .5rem;
            width: 60%;
            border-radius: 10px;
        }
    }
}
</style>