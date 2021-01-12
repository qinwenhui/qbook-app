<!-- 横版书籍块图 -->
<template>
  <div class="main" :style="{'width': width, 'height': height, 'margin-top': gutter}">
    <!-- 左边的图 -->
    <div class="img-div">
      <van-image width="100%" height="100%" :src="image" />
    </div>
    <!-- 右边的内容 -->
    <div class="content-div">
      <span>{{title}}</span>
      <span>{{desc}}</span>
      <span>{{author}}</span>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
export default {
  name: 'BookHorizontal',
  data () {
    return {
    };
  },
  props: {
      image: '',
      width: {
          default: '100px'
      },
      height: {
          default: '150px'
      },
      title: {
          default: '标题'
      },
      author: {
          default: '作者'
      },
      desc: {
          default: '简介'
      },
  },
  components: {
    [Image.name]: Image
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.main {
  float: left;
  background-color: bisque;
  .img-div {
    width: 25%;
    float: left;
    background-color: yellow;
  }
  .content-div {
    width: 70%;
    float: left;
    background-color: goldenrod;
  }
}
</style>