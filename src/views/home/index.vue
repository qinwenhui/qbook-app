<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <TopBar image="http://www.uugai.com/img/index_img/35.jpg" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" class="index-swipe">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image width="100%" height="100%" lazy-load fit="fill" :src="image"/>
        </van-swipe-item>
      </van-swipe>

      <!-- 宫格导航栏 -->
      <div class="grid-div">
        <van-grid :column-num="gridList.length">
          <van-grid-item  v-for="(item, index) in gridList" :key="index" :icon="item.icon" :text="item.text" />
        </van-grid>
      </div>

      <!-- 热门推荐 -->
      <div class="hot-div">
        <!-- 块标题 -->
        <div class="title-div">
          <span class="shu">丨</span>
          <span class="title">热门推荐</span>
          <div class="more">
            <span>更多</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 块内容 -->
        <div>
          <van-grid :column-num="4" >
            <BookVertical width="22%" height="150px" gutter="2.5%" v-for="book in hotBooks" :key="book.id" :image="book.image" :text="book.title"></BookVertical>
          </van-grid>
        </div>
      </div>

      <!-- 最新书籍 -->
      <div class="hot-div">
        <!-- 块标题 -->
        <div class="title-div">
          <span class="shu">丨</span>
          <span class="title">最新书籍</span>
          <div class="more">
            <span>更多</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 块内容 -->
        <div>
          <BookHorizontal width="100%" height="100px" gutter="10px" v-for="book in hotBooks" :key="book.id" :image="book.image" :text="book.title"></BookHorizontal>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import BookVertical from '@/components/book/BookVertical';
import BookHorizontal from '@/components/book/BookHorizontal';
import { Grid, GridItem } from 'vant';
export default {
  data() {
    return {
      images: [
        'http://static.zongheng.com/upload/recommend/77/03/77034a484c3ebfd2e41e8c23a469137c.jpeg',
        'http://static.zongheng.com/upload/recommend/71/40/7140c24a7c17e75d827782ab356484a1.jpeg',
        'http://static.zongheng.com/upload/recommend/15/b4/15b4d97f84ba0525eecc4613b7d8abd6.jpeg',
        'http://static.zongheng.com/upload/recommend/67/7f/677f7fd960947652f43033eff9734212.jpeg',
        'http://static.zongheng.com/upload/recommend/e2/6a/e26adbcb31f06680e0821fb9895a7951.jpeg'
      ],
      gridList: [
        {
          icon: require('@/assets/icon/grid1.png'),
          text: '分类'
        },
        {
          icon: require('@/assets/icon/grid2.png'),
          text: '排行'
        },
        {
          icon: require('@/assets/icon/grid4.png'),
          text: '小说'
        },
        {
          icon: require('@/assets/icon/grid5.png'),
          text: '漫画'
        },
        {
          icon: require('@/assets/icon/grid6.png'),
          text: '个人中心'
        },
      ],
      //热门推荐
      hotBooks: [
        {id: '1', title: '符化万物', image: 'http://static.zongheng.com/upload/cover/a1/68/a16830d746f921181fe7fcce082a3008.jpeg'},
        {id: '2', title: '我真的不是故意的', image: 'http://static.zongheng.com/upload/cover/b3/d0/b3d0c11f7d28644cc38a4e53dbf09c79.jpeg'},
        {id: '3', title: '超级宗门系统', image: 'http://static.zongheng.com/upload/cover/00/7b/007b705b8bc1644dac0b6336bf4fa398.jpeg'},
        {id: '4', title: '魔道仙途录', image: 'http://static.zongheng.com/upload/cover/0f/f9/0ff9227736c5f6ea69200b51acca7aac.jpeg'},
        {id: '5', title: '神级售货商', image: 'http://static.zongheng.com/upload/cover/05/c0/05c085512f4fea89fea4d53d1c2f9274.jpeg'},
        {id: '6', title: '镇国医圣', image: 'http://static.zongheng.com/upload/cover/0a/8c/0a8c1e6f14296b6e71b399257d38f0bb.jpeg'},
        {id: '7', title: '穿书后我成了反派怎么办', image: 'http://static.zongheng.com/upload/cover/24/11/2411418c9bf72e7bc1a00b9ffa1b8cc9.jpeg'},
        {id: '8', title: '跨境投资专家', image: 'http://static.zongheng.com/upload/cover/88/4f/884fbb7872d5354c96b9d87a56804737.jpeg'}
      ]
    }
    
  },

  computed: {},

  mounted() { },

  methods: {},

  components: {
    TopBar, [Grid.name]: Grid, [GridItem.name]: GridItem, BookVertical, BookHorizontal
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .warpper {
    background: #eee;
  }
  .content {
    padding: 0 10px 10px 10px;
    .index-swipe{
      width: 100%;
      height: 150px;
      border-radius: 0 0 10px 10px;
    }
    .grid-div {
      padding-top: 15px;
    }
    .hot-div {
      margin-top: 13px;
      background-color: white;
      .title-div {
        height: 40px;
        .shu {
          height: 100%;
          font-size: 15px;
          line-height: 40px;
          color: red;
        }
        .title {
          font-weight: bold;
          font-size: 15px;
          line-height: 40px;
        }
        .more {
          font-size: 13px;
          line-height: 40px;
          float: right;
          margin-right: 5px;
          color: #aaaaaa;
        }
      }
    }
  }
}
</style>
