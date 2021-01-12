<!-- 竖版书籍块图 -->
<template>
  <div class="main" :style="{'width': width, 'height': height, 'margin-left': gutter}">
      <!-- 图片 -->
      <div class="img-div">
          <van-image width="100%" height="100%" :src="image" />
      </div>
      <!-- 文字 -->
      <div class="text-div van-multi-ellipsis--l2">
          <span v-text="text"></span>
      </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
export default {
  name: 'BookVertical',
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
      text: {
          default: '文字'
      },
      gutter: {
          default: '0px'
      }
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
.main{
    .img-div {
        width: 100%;
        height: 70%;
        box-shadow: 0 0 2px 0 #aaaaaa;
    }
    .text-div {
        margin-top: 5px;
        text-align: center;
    }
}
</style>