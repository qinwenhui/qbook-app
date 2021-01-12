<template>
  <div class="index-container">
    <div class="warpper">
      <TopBar :image="topLogo" />
    </div>
    <div class="content">
    <!-- 热门推荐 -->
      <div class="hot-div">
        <div>
          <van-grid v-if="myBooks!=null&&myBooks.length>0">
            <BookVertical width="28%" height="210px" gutter="4%" v-for="book in myBooks" :key="book.id" :image="book.image" :text="book.title" />
          </van-grid>
          <van-empty v-if="myBooks==null || myBooks.length==0" image="error" description="书中自有黄金屋" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import BookVertical from '@/components/book/BookVertical';
import { Grid, Empty } from 'vant';
export default {
  data() {
    return {
      topLogo: require('@/assets/icon/logo.png'),
      //热门推荐
      myBooks: [
        {id: '1', title: '符化万物', image: 'http://static.zongheng.com/upload/cover/a1/68/a16830d746f921181fe7fcce082a3008.jpeg'},
        {id: '2', title: '我真的不是故意的', image: 'http://static.zongheng.com/upload/cover/b3/d0/b3d0c11f7d28644cc38a4e53dbf09c79.jpeg'},
        {id: '3', title: '超级宗门系统', image: 'http://static.zongheng.com/upload/cover/00/7b/007b705b8bc1644dac0b6336bf4fa398.jpeg'},
        {id: '4', title: '魔道仙途录', image: 'http://static.zongheng.com/upload/cover/0f/f9/0ff9227736c5f6ea69200b51acca7aac.jpeg'},
        {id: '5', title: '神级售货商', image: 'http://static.zongheng.com/upload/cover/05/c0/05c085512f4fea89fea4d53d1c2f9274.jpeg'},
        {id: '6', title: '镇国医圣', image: 'http://static.zongheng.com/upload/cover/0a/8c/0a8c1e6f14296b6e71b399257d38f0bb.jpeg'},
        {id: '7', title: '穿书后我成了反派怎么办', image: 'http://static.zongheng.com/upload/cover/24/11/2411418c9bf72e7bc1a00b9ffa1b8cc9.jpeg'},
        {id: '8', title: '跨境投资专家', image: 'http://static.zongheng.com/upload/cover/88/4f/884fbb7872d5354c96b9d87a56804737.jpeg'}
      ],
    }
  },
  computed: {},

  mounted() { },

  methods: {},

  components: {
    TopBar, BookVertical, [Grid.name]: Grid, [Empty.name]: Empty
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  height: 100%;
  .warpper {
    background: #eee;
  }
  .content {
    .hot-div {
      margin-top: 13px;
    }
  }
}
</style>