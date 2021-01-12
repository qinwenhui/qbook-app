<template>
  <div class="main">
    <!-- 标签栏 -->
    <div>
        <van-tabs v-model="active" line-height="2" sticky @change="changeTab">
        <van-tab>
            <template #title> <van-icon name="fire-o" />热销榜</template>
            <div class="content">
                <div v-if="books!=null && books.length>0">
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                        <div v-for="book in books" :key="book.id" >
                            <BookHorizontal width="100%" height="110px" gutter="0px" :image="book.image" :title="book.title" :desc="book.desc" :author="book.author" />
                            <van-divider />
                        </div>
                    </van-list>
                    
                </div>
                <van-empty v-if="books==null || books.length==0" image="error" description="暂无书籍" />
            </div>
        </van-tab>
        <van-tab>
            <template #title> <van-icon name="thumb-circle-o" />点击榜</template>
            <div class="content">
                <div v-if="books!=null && books.length>0">
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                        <div v-for="book in books" :key="book.id" >
                            <BookHorizontal width="100%" height="110px" gutter="0px" :image="book.image" :title="book.title" :desc="book.desc" :author="book.author" />
                            <van-divider />
                        </div>
                    </van-list>
                    
                </div>
                <van-empty v-if="books==null || books.length==0" image="error" description="暂无书籍" />
            </div>
        </van-tab>
        <van-tab>
            <template #title> <van-icon name="new-o" />新书榜</template>
            <div class="content">
                <div v-if="books!=null && books.length>0">
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                        <div v-for="book in books" :key="book.id" >
                            <BookHorizontal width="100%" height="110px" gutter="0px" :image="book.image" :title="book.title" :desc="book.desc" :author="book.author" />
                            <van-divider />
                        </div>
                    </van-list>
                    
                </div>
                <van-empty v-if="books==null || books.length==0" image="error" description="暂无书籍" />
            </div>
        </van-tab>
        <van-tab>
            <template #title> <van-icon name="bookmark-o" />收藏榜</template>
            <div class="content">
                <div v-if="books!=null && books.length>0">
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                        <div v-for="book in books" :key="book.id" >
                            <BookHorizontal width="100%" height="110px" gutter="0px" :image="book.image" :title="book.title" :desc="book.desc" :author="book.author" />
                            <van-divider />
                        </div>
                    </van-list>
                    
                </div>
                <van-empty v-if="books==null || books.length==0" image="error" description="暂无书籍" />
            </div>
        </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
import BookHorizontal from '@/components/book/BookHorizontal';
import { Grid, Empty, Tab, Tabs, Divider, List } from 'vant';
export default {
    data() {
    return {
      active: '',
      loading: false,
      finished: false,
      //书籍列表
      books: [
        {id: 1, title: '剑来', desc: '大千世界，无奇不有。 我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！ 我叫陈平安，平平安安的平安。我是一名剑客。', author: '烽火戏诸侯', image: 'http://static.zongheng.com/upload/cover/2017/05/1496234539057.JPG'},
        {id: 2, title: '日月风华', desc: '欲戴其冠，必承其重，难承其重，定夺其冠。 边城少年抬头的那一天，满眼帝王将相冠冕不正，于是扬刀开始了猎冠的征程。 这是一个以君王为猎物的故事！', author: '沙漠', image: 'http://static.zongheng.com/upload/cover/10/21/1021d7d499e97340473481dc7a5f6c88.jpeg'},
        {id: 3, title: '一剑独尊', desc: '生死看淡，不服就干。 诸天神佛仙，不过一剑间！', author: '青鸾峰上', image: 'http://static.zongheng.com/upload/cover/b0/c5/b0c5af5b3ca214b123f388789c0e9514.jpeg'},
        {id: 4, title: '我只有两千五百岁', desc: '一名大学生，竟然已经逆天活了两千五百年，最后一次重修的苏烨决定好好享受大学生生活，但奈何才华横溢，走哪都是高光！唉，这就是入世后的人生！【公众号：作者步行天下】', author: '步行天下', image: 'http://static.zongheng.com/upload/cover/7e/f9/7ef9423579ad3398b0ae74bb55f629241588122117774.jpeg'},
        {id: 5, title: '雪中悍刀行', desc: '江湖是一张珠帘。大人物小人物，是珠子，大故事小故事，是串线。情义二字，则是那些珠子的精气神。————开始收官中。最终章将以那一声“小二上酒”结尾。【北京影视出版创作基金扶持作品】鸣谢北京市新闻出版广电局', author: '烽火戏诸侯', image: 'http://static.zongheng.com/upload/cover/03/3b/033bfb691d626e55f78e6c7fef0a9737.jpeg'},
      ],
    }
  },
  computed: {},

  mounted() { },

  methods: {
    changeTab(name, title) {
        console.log(this.active)
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
          for(let i=0;i<4;i++){
            this.books.push(this.books[i]);
          }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.books.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },

  components: {
    BookHorizontal, [Grid.name]: Grid, [Empty.name]: Empty, [Tab.name]: Tab, [Tabs.name]: Tabs, [Divider.name]: Divider, [List.name]: List
  }
}
</script>

<style lang="scss" scoped>
.main {
    background-color: white;
    .content {
        margin-top: 20px;
        padding: 0 10px 0 10px;
        background-color: white;
    }
}
</style>