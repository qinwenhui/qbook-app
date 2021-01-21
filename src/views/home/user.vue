<template>	
	<div class="main">
		<!-- 头部 -->
        <div class="header">
            <div class="header-img">
                <van-image width="2rem" height="2rem" round :src="userInfo.headimage" />
            </div>
                
            <div class="header-content">
                {{userInfo.username}}
            </div>
        </div>
		
		<!-- 选项 -->
		<div class="option_div">
			<van-cell-group class="group">
				<van-cell size="large" icon="volume-o" title="消息通知" is-link @click="this.$router.push('/info/Information')"/>
			</van-cell-group>
			<van-cell-group class="group">
				<van-cell size="large" icon="clock-o" title="最近浏览" is-link @click="this.$router.push('/user/Myhistory')"/>
				<!-- <van-cell size="large" icon="orders-o" title="我的书单" is-link @click="this.$router.push('/user/BookSelf')"/> -->
				<van-cell size="large" icon="cash-back-record" title="金币消费" is-link @click="this.$router.push('/user/Record')"/>
			</van-cell-group>
			<van-cell-group class="group">
				<van-cell size="large" icon="gold-coin-o" title="充值中心" is-link @click="this.$router.push('/pay/Pro')"/>
				<van-cell size="large" icon="balance-list-o" title="充值记录" is-link @click="this.$router.push('/user/MyCharge')"/>
			</van-cell-group>
			<van-cell-group class="group">
				<van-cell size="large" icon="records" title="意见反馈" is-link @click="this.$router.push('/user/Feedback')"/>
				<van-cell size="large" icon="newspaper-o" title="反馈记录" is-link @click="this.$router.push('/user/FeedbackList')"/>
			</van-cell-group>
			<van-cell-group class="group">
				<van-cell size="large" icon="friends-o" title="修改账号" is-link @click="this.$router.push('/user/CgAccount')"/>
			</van-cell-group>
			
		</div>
		<!-- 退出登录按钮 -->
		<div class="loginout_div">
			<van-button type="primary" block color="linear-gradient(to right, #ff7583, #ee0d2e)" @click='toLogout'>退出登录</van-button>
		</div>
	</div>
</template>

<script>
	import { Button, Grid, GridItem, Cell, CellGroup, Toast } from 'vant';
	import { mapGetters } from 'vuex';
	import { getUserInfo, logout } from 'api/user';
	export default {
	  components: {
		[Grid.name]: Grid,
		[GridItem.name]: GridItem,
		[Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Toast.name]: Toast,
	  },
	  data () {
	    return {
          userInfo:{
              username: '用户名'
          },
	    }
	  },
	  computed: {
		  ...mapGetters(['loginStatus'])
	  },
	  created: function (){
		  console.log(this.loginStatus)
		  //先判断是否登录，未登录的自动跳转登录页面
		  if(this.loginStatus){
			//初始化数据
			this.initData();
		  }else{
			this.$router.push('/login')
		  }
	  },
	  watch: {
	  },
	  methods: {
		  initData: function (){		
			this.loadUserInfo();
		  },
		  //用户信息  
		  loadUserInfo: function (){
			getUserInfo().then(res=>{
				if(res.code==0){
					//获取当前登录用户信息成功
					this.userInfo = res.data
				}else{
					Toast.fail(res.msg);
				}
			})
			
          },
          //退出登录
          toLogout() {
			  logout().then(res=>{
				  if(res.code == '8848'){
					  this.$router.push('/login')
				  }else{
					  Toast.fail(res.msg)
				  }
			  })
          }												  
	  }		  
	};
</script>

<style scoped>
	.main{
		height: 95vh;
	}
	.header {
        height: 150px;
        background-image:url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1745276112,2426424801&fm=26&gp=0.jpg')
    }
    .header-img {
        height: 70%;
        text-align: center;
        line-height: 5rem;
    }
    .header-content {
        height: 30%;
        text-align: center;
    }
	.option_div{
		margin-top: 0.3rem;
		padding: 0rem .3rem 0rem .3rem;
	}
	.option_div .group{
		margin-top: 0.3rem;
	}
	.loginout_div{
		margin-top: 1rem;
		padding: 0rem 1rem 0rem 1rem;
	}
	.van-grid {
		width: 90%;
		margin: auto;
	}	

</style>
