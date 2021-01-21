<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <TopBar :image="topLogo" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" class="index-swipe">
        <van-swipe-item v-for="(swipe, index) in swipeList" :key="index" @click="goSwipe(swipe)">
          <van-image width="100%" height="100%" lazy-load fit="fill" :src="swipe.image"/>
        </van-swipe-item>
      </van-swipe>

      <!-- 宫格导航栏 -->
      <div class="grid-div">
        <van-grid :column-num="gridList.length">
          <van-grid-item  v-for="(item, index) in gridList" :key="index" :icon="item.icon" :text="item.text" @click="$router.push(item.url)"/>
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
          <van-grid>
            <BookVertical width="22%" height="160px" gutter="2.5%" v-for="book in hotBooks" :key="book.id" :image="book.image" :text="book.title" @click.native="$router.push('/bookinfo/'+book.id)" />
          </van-grid>
        </div>
      </div>

      <!-- 最新书籍 -->
      <div class="hot-div new-div">
        <!-- 块标题 -->
        <div class="title-div">
          <span class="shu">丨</span>
          <span class="title">最新连载</span>
          <div class="more">
            <span>更多</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 块内容 -->
        <div>
          <div v-for="book in newBooks" :key="book.id" >
            <BookHorizontal width="100%" height="110px" gutter="0px" :image="book.image" :title="book.title" :desc="book.desc" :author="book.author" @click.native="$router.push('/bookinfo/'+book.id)" />
            <van-divider />
          </div>
        </div>
      </div>

      <!-- 经典完本 -->
      <div class="hot-div new-div">
        <!-- 块标题 -->
        <div class="title-div">
          <span class="shu">丨</span>
          <span class="title">经典完本</span>
          <div class="more">
            <span>更多</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 块内容 -->
        <div>
          <van-grid>
            <BookVertical width="22%" height="160px" gutter="2.5%" v-for="book in overBooks" :key="book.id" :image="book.image" :text="book.title" @click.native="$router.push('/bookinfo/'+book.id)" />
          </van-grid>
        </div>
      </div>

      <!-- 猜你喜欢 -->
      <div class="hot-div new-div">
        <!-- 块标题 -->
        <div class="title-div">
          <span class="shu">丨</span>
          <span class="title">猜你喜欢</span>
          <div class="more">
            <span>更多</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 块内容 -->
        <div>
          <van-grid>
            <BookVertical width="22%" height="160px" gutter="2.5%" v-for="book in likeBooks" :key="book.id" :image="book.image" :text="book.title" @click.native="$router.push('/bookinfo/'+book.id)" />
          </van-grid>
        </div>
      </div>

    </div>
    <div style="height: 60px;width: 100%;float:left;"></div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import BookVertical from '@/components/book/BookVertical';
import BookHorizontal from '@/components/book/BookHorizontal';
import { Grid, GridItem, Divider } from 'vant';
import { swipe } from '@/api/home';
export default {
  data() {
    return {
      topLogo: require('@/assets/icon/logo.png'),
      swipeList: [
      ],
      gridList: [
        {
          icon: require('@/assets/icon/grid1.png'),
          text: '分类',
          url: '/category'
        },
        {
          icon: require('@/assets/icon/grid2.png'),
          text: '排行',
          url: '/rank'
        },
        {
          icon: require('@/assets/icon/grid4.png'),
          text: '小说',
          url: '/category'
        },
        {
          icon: require('@/assets/icon/grid5.png'),
          text: '漫画',
          url: '/category'
        },
        {
          icon: require('@/assets/icon/grid6.png'),
          text: '个人中心',
          url: '/user'
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
      ],
      //最新连载
      newBooks: [
        {id: 1, title: '剑来', desc: '大千世界，无奇不有。 我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！ 我叫陈平安，平平安安的平安。我是一名剑客。', author: '烽火戏诸侯', image: 'http://static.zongheng.com/upload/cover/2017/05/1496234539057.JPG'},
        {id: 2, title: '日月风华', desc: '欲戴其冠，必承其重，难承其重，定夺其冠。 边城少年抬头的那一天，满眼帝王将相冠冕不正，于是扬刀开始了猎冠的征程。 这是一个以君王为猎物的故事！', author: '沙漠', image: 'http://static.zongheng.com/upload/cover/10/21/1021d7d499e97340473481dc7a5f6c88.jpeg'},
        {id: 3, title: '一剑独尊', desc: '生死看淡，不服就干。 诸天神佛仙，不过一剑间！', author: '青鸾峰上', image: 'http://static.zongheng.com/upload/cover/b0/c5/b0c5af5b3ca214b123f388789c0e9514.jpeg'},
        {id: 4, title: '我只有两千五百岁', desc: '一名大学生，竟然已经逆天活了两千五百年，最后一次重修的苏烨决定好好享受大学生生活，但奈何才华横溢，走哪都是高光！唉，这就是入世后的人生！【公众号：作者步行天下】', author: '步行天下', image: 'http://static.zongheng.com/upload/cover/7e/f9/7ef9423579ad3398b0ae74bb55f629241588122117774.jpeg'},
        {id: 5, title: '雪中悍刀行', desc: '江湖是一张珠帘。大人物小人物，是珠子，大故事小故事，是串线。情义二字，则是那些珠子的精气神。————开始收官中。最终章将以那一声“小二上酒”结尾。【北京影视出版创作基金扶持作品】鸣谢北京市新闻出版广电局', author: '烽火戏诸侯', image: 'http://static.zongheng.com/upload/cover/03/3b/033bfb691d626e55f78e6c7fef0a9737.jpeg'},
      ],
      //经典完本
      overBooks: [
        {id: '1', title: '红色警戒之战争之王', image: 'http://static.zongheng.com/upload/cover/56/cf/56cf83a39f8efa91b6aab63546432039.png'},
        {id: '2', title: '道杀', image: 'http://static.zongheng.com/upload/cover/5d/d4/5dd4bbf32eac215570188b3848c5bc3e.jpeg'},
        {id: '3', title: '梦想图腾', image: 'http://static.zongheng.com/upload/cover/56/e2/56e2b3f3756f0c6a5359396b55c11c58.jpeg'},
        {id: '4', title: '我的npc之旅', image: 'http://static.zongheng.com/upload/cover/0a/66/0a664da89c2de1176e6c43523547339a.jpeg'},
      ],
      //猜你喜欢
      likeBooks: [
        {id: '1', title: '我只有九万九千岁', image: 'http://static.zongheng.com/upload/cover/de/92/de92f1baed4bb60b21cc751cb86ee272.jpeg'},
        {id: '2', title: '天赋逆变', image: 'http://static.zongheng.com/upload/cover/30/30/30308356ebd27f4a54f2f741ffda5087.jpeg'},
        {id: '3', title: '天道莫开', image: 'http://static.zongheng.com/upload/cover/8f/13/8f1319c9eafa3ff6c9f4351b57690ec9.jpeg'},
        {id: '4', title: '神启帝国', image: 'http://static.zongheng.com/upload/cover/ca/17/ca175e74e7843bc9cd61d18d5b8afe59.jpeg'},
      ],
    }
    
  },

  computed: {},

  mounted() { },

  methods: {
    initData() {
      //加载轮播图
      this.getSwipe()
    },
    //获取轮播图
    getSwipe() {
      swipe().then(res=>{
        if(res.code == 0){
          this.swipeList = res.data
        }
      })
    },
    //跳转到轮播图详情
    goSwipe(swipe) {
      if(swipe.type==0){
        //轮播图是站内书籍资源,url参数是书籍编号
        this.$router.push( `/bookinfo/${swipe.url}`)
      }else{
        //轮播图是站外资源，通过外链跳转
        window.location.href = swipe.url
      }
    }
  },

  components: {
    TopBar, [Grid.name]: Grid, [GridItem.name]: GridItem, BookVertical, BookHorizontal, [Divider.name]: Divider
  },
  created() {
    this.initData()
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
    .new-div {
      padding: 0 5px 0 5px;
      height: 100%;
      float:left;
    }
  }
}
</style>
