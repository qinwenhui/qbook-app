<!-- 横版书籍块图 -->
<template>
  <div class="main" :style="{'width': width, 'height': height, 'margin-top': gutter}">
    <!-- 左边的图 -->
    <div class="img-div">
      <van-image width="100%" height="100%" :src="image" />
    </div>
    <!-- 右边的内容 -->
    <div class="content-div">
      <div class="title van-ellipsis"><span>{{title}}</span></div>
      <div class="desc van-multi-ellipsis--l3"><span>{{desc}}</span></div>
      <div class="author van-ellipsis"><span>{{author}}</span></div>
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
      gutter: {
          default: '0px'
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
  .img-div {
    width: 23%;
    height: 100%;
    float: left;
    box-shadow: 0 0 2px 0 #aaaaaa;
  }
  .content-div {
    width: 70%;
    height: 100%;
    float: left;
    padding: 5px 5px 5px 10px;
    .title {
      font-weight: bold;
      font-size: 15px;
      display:block;
      height:25%;
    }
    .desc {
      font-size: .3rem;
      display:block;
      height: 44%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      color: #6e6a6a;
    }
    .author {
      font-size: 13px;
      display:block;
      height: 23%;
      padding-top: 2%;
      color: #444444;
    }
  }
}
</style>