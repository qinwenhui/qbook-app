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
          <van-button type="primary" @click="toLogin">登录</van-button>
          <van-button type="warning" @click="$router.push('/register')">前往注册</van-button>
      </div>
  </div>
</template>

<script>
import { NavBar, Toast } from 'vant';
import { login } from 'api/user';
import { mapActions } from 'vuex'
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

  methods: {
      ...mapActions(['setUserName', 'setToken']),
      toLogin() {
          //判断账号密码是否为空
          if(this.username==''||this.password==''){
              Toast('账号密码不能为空');
          }else{
              login({username: this.username, password: this.password}).then(res => {
                  if(res.code == 0){
                      //登录成功,跳转到个人中心页面
                      this.setUserName(this.username);
                      this.setToken(res.data)
                      this.$router.push('/user')
                  }else{
                      Toast.fail(res.msg);
                  }
              })
          }
      }
  },
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