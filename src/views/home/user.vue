<template>	
	<div class="main">
		<!-- 头部 -->
        <div class="header">
            <div class="header-img">
                <van-image width="2rem" height="2rem" round src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3874067489,2447793058&fm=11&gp=0.jpg" />
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
			<van-button type="primary" block color="linear-gradient(to right, #ff7583, #ee0d2e)" @click='logout'>退出登录</van-button>
		</div>
	</div>
</template>

<script>
	import { Button, Grid, GridItem, Cell, CellGroup, Toast } from 'vant';
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
          token: null,
		  //加载进度
		  loadArr: [],
	    }
	  },
	  created: function (){
		  //初始化数据
		  this.initData();
	  },
	  watch: {
		  loadArr: {
			  deep: true,
			  handler: function (list){
				  //如果加载进度达到3，说明三个接口都已经返回，加载结束
				  if(Object.keys(list).length == 1){
					  //关闭加载中提示
					  Toast.clear();
				  }
			  }
		  }
	  },
	  methods: {
		  initData: function (){
			//先清空加载进度
			this.loadArr.length = 0;
			//显示加载中
			Toast.loading({
				message: '加载中...',
				forbidClick: true,
			});			
			  
			this.loadUserInfo();
		  },
		  //用户信息  
		  loadUserInfo: function (){
			//加载完成进度+1
			this.loadArr.push(true);
          },
          //退出登录
          logout() {
			  this.$router.push('/login')
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
