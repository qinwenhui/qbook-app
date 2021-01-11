<template>
<van-sticky>
  <div class="top">
    <van-row>
        <van-col span="7">
            <van-image width="100%" height="40" :src="image" />
        </van-col>
        <van-col span="9"></van-col>
        <van-col span="4">
            <van-image width="30" height="30" :src="searchIcon" @click="goSearch" />
        </van-col>
        <van-col span="4">
            <van-image width="30" height="30" :src="userInfoIcon" @click="goUserInfo" />
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
      searchIcon: require("@/assets/icon/icon-search.png"),
      userInfoIcon: require("@/assets/icon/icon-search.png"),
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
    background-color: aquamarine;
}
.searchIcon {
    width: 100%;
    height: 100%;
}
</style>
