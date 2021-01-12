<template>
<van-sticky>
  <div class="top">
    <van-row>
        <van-col span="1"></van-col>
        <van-col span="10">
            <van-image width="100%" height="40" :src="image" />
        </van-col>
        <van-col span="10">
          <div>
            <van-button class="search-btn" icon="search" round />
          </div>
        </van-col>
        <van-col span="3">
            <van-image class="userinfo-image" :src="userInfoIcon" @click="goUserInfo" />
        </van-col>
    </van-row>
  </div>
</van-sticky>
</template>
<script>
export default {
  name: 'TopBar',
  props: {
    image: ""
  },
  data() {
    return {
      userInfoIcon: require("@/assets/icon/userinfo-icon.png"),
      keyword: ''
    }
  },
  methods: {
    //跳转到个人信息
    goUserInfo() {
      console.log('跳转到个人信息')
    },
    //跳转到搜索页面
    goSearch() {
      console.log('跳转到搜索页面')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
    height: 40px;
    margin: 0px;
    padding: 0px;
    box-shadow: 0 0 3px 0 #aaaaaa;
    background-color:white;
}
.searchIcon {
    width: 100%;
    height: 100%;
}
.userinfo-image {
  border-radius: 100%;
  width: 24px;
  height: 24px;
  margin-top: 8px;
  text-align: center;
}
.search-btn {
  width: 24px;
  height: 24px;
  margin-top: 8px;
  margin-right: 20px;
  float: right;
}
</style>
