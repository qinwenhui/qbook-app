<!-- 书籍详情页 -->
<template>
  <div class="main">
      <!-- 导航栏 -->
      <div>
        <van-nav-bar title="书籍详情" left-arrow @click-left="$router.go(-1)">
            <template #right>
                <van-icon name="home-o" size="20" @click="$router.push('/')" />
            </template>
        </van-nav-bar>
      </div>
      <!-- 详情 -->
      <div class="header">
          <!--封面-->
          <div class="header-cover">
              <van-image width="100%" height="100%" lazy-load :src="book.image" />
          </div>
          <!--书名作者等信息-->
          <div class="header-content">
              <div class="title">
                  <span>{{book.title}}</span>
              </div>
              <div class="author">
                  <van-icon name="user-o" />
                  <span>{{book.auther}}</span>
                  <span class="shu">|</span>
                  <span class="hot">1.2万人气</span>
              </div>
              <div class="type">
                  <span>{{book.type}}</span>
                  <span class="shu">|</span>
                  <span class="status">{{book.status}}</span>            
              </div>
              <div class="category">
                  <van-tag plain type="primary" v-for="value in book.category" :key="value" class="tag">{{value}}</van-tag>
              </div>
          </div>
      </div>
      <!-- 按钮 -->
      <div class="btn-div">
          <van-row>
            <van-col span="12">
                <van-button plain type="primary" v-if="book.in==0" class="btn">加入书架</van-button>
                <van-button plain type="primary" v-if="book.in==1" disabled  class="btn">已加入书架</van-button>
            </van-col>
            <van-col span="12">
                <van-button type="danger" class="btn" @click="$router.push('/chapter/1')">开始阅读</van-button>
            </van-col>
        </van-row>
      </div>
      <!--简介-->
      <div :class="['desc', descEllipsis]" :style="{'height': descDivHeight}" @click="showDesc">
          <span v-text="book.desc"></span>
      </div>

      <!--最新章节-->
      <div class="last-capter">
          <van-cell-group title="最新章节">
            <van-cell title="第一千零八十章 看望马大王" label="更新时间：2021-01-13 08:01:48" />
          </van-cell-group>
      </div>

     <!--目录-->
     <div class="mulu">
          <van-cell-group>
            <van-cell title="目录" value="更多" @click="$router.push('/book/catalog')"/>
          </van-cell-group>
          <div class="content">
                <div v-if="muluList!=null && muluList.length>0">
                    <van-list
                    >
                        <div>
                            <van-cell v-for="mulu in muluList" :key="mulu.id" :title="mulu.name" value="免费" size="large" />
                        </div>
                    </van-list>
                    <van-pagination v-model="currentPage" :page-count="pageSize" mode="simple" />
                </div>
                <van-empty v-if="muluList==null || muluList.length==0" image="error" description="暂无目录" />
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
</template>

<script>
import { NavBar, Tag, Pagination, Empty, Grid, Toast } from 'vant';
import BookVertical from '@/components/book/BookVertical';
import { getBookInfo } from '@/api/book';
const defaultBook = {
    id: 0,
    title: '玄天龙尊',
    image: 'https://yue06.sogoucdn.com/cdn/image/book/5116541314_1542361470851.jpg',
    auther: '海龙是的撒大所多多',
    type: '小说',
    status: '连载中',
    category: [
        '玄幻','修仙','升级流','幻想','架空'
    ],
    in: 0,
    desc: '星辰大陆，浩天帝国，时空倒转，斗转星移，是为逆天改命！玄天功法、龙尊神戒，助我逞威仙神人三界，成就玄天至尊巅峰！星辰大陆，浩天帝国，时空倒转，斗转星移，是为逆天改命！玄天功法、龙尊神戒，助我逞威仙神人三界，成就玄天至尊巅峰！星辰大陆，浩天帝国，时空倒转，斗转星移，是为逆天改命！玄天功法、龙尊神戒，助我逞威仙神人三界，成就玄天至尊巅峰！'
}
export default {
  name: 'Bookinfo',
  data () {
    return {
        id: this.$route.params.id,
        book: defaultBook,
        descDivHeight: '1.2rem',
        //简介的折叠和展开,true展开
        descFlag: false,
        descEllipsis: 'van-multi-ellipsis--l3',
        muluList: [
            {id: 1, name: '第一章'},
            {id: 2, name: '第二章'},
            {id: 3, name: '第三章'},
            {id: 4, name: '第四章'},
            {id: 5, name: '第五章'},
            {id: 6, name: '第六章'},
            {id: 7, name: '第七章'},
            {id: 8, name: '第八章'},
            {id: 9, name: '第九章'},
            {id: 10, name: '第十章'},
        ],
        currentPage: 1,
        pageSize: 12,
        //猜你喜欢
        likeBooks: [
          {id: '1', title: '我只有九万九千岁', image: 'http://static.zongheng.com/upload/cover/de/92/de92f1baed4bb60b21cc751cb86ee272.jpeg'},
          {id: '2', title: '天赋逆变', image: 'http://static.zongheng.com/upload/cover/30/30/30308356ebd27f4a54f2f741ffda5087.jpeg'},
          {id: '3', title: '天道莫开', image: 'http://static.zongheng.com/upload/cover/8f/13/8f1319c9eafa3ff6c9f4351b57690ec9.jpeg'},
          {id: '4', title: '神启帝国', image: 'http://static.zongheng.com/upload/cover/ca/17/ca175e74e7843bc9cd61d18d5b8afe59.jpeg'},
        ],

    };
  },
  props:{
      
  },
  components: {
      [NavBar.name]: NavBar, [Tag.name]: Tag, [Pagination.name]: Pagination, [Empty.name]: Empty, [Grid.name]: Grid, BookVertical
  },

  computed: {},

  watch: {
    //监听路由变化，如果跳转到本页，刷新当前页数据
    $route(to, from) {
        this.id = to.params.id;
        //加载数据
        this.initData()
        console.log(to)
        console.log(from)
    },
  },
  
  mounted() {
      console.log('mounted---')
  },

  methods: {
      //初始化数据
      initData() {
          this.getBookInfo()
      },
      //获取书籍信息
      getBookInfo() {
          const params = {
              id: this.id
          }
          getBookInfo(params).then(res=>{
            if(res.code == "0"){
                // this.book = res.data
            }else{
                Toast.fail(res.msg)
            }
          })
      },
      //折叠或展开简介
      showDesc() {
          if(this.descFlag){
              this.descFlag = false
              //折叠
              this.descDivHeight = '1.2rem'
              this.descEllipsis = 'van-multi-ellipsis--l3'
          }else{
              this.descFlag = true
              //展开
              this.descDivHeight = '100%'
              this.descEllipsis = ''
          }
      },
      onLoad() {

      }
  },
  created() {
    console.log('加载数据---')
    //初始化
    this.initData()
  }
}

</script>
<style lang='scss' scoped>
.main {
    .header {
        background-color: white;
        height: 3.5rem;
        padding: .4rem .3rem .4rem .3rem;
        .header-cover {
            width: 2.5rem;
            height: 3.5rem;
            float: left;
            box-shadow: 0 0 3px 0 #aaaaaa;
        }
        .header-content {
            width: 6rem;
            height: 3.5rem;
            float: left;
            margin-left: .5rem;
            .title {
                font-weight: bold;
                font-size: .5rem;
            }
            .author {
                padding-top: .2rem;
                color: #666;
                span {
                    margin-left: .1rem;
                }
                .shu {
                    margin-left: .3rem;
                }
                .hot {
                    margin-left: .3rem;
                    color: rgb(219, 97, 26);
                }
            }
            .type {
                padding-top: .2rem;
                color: #666;
                span {
                    margin-left: .1rem;
                }
                .shu {
                    margin-left: .3rem;
                }
                .status {
                    margin-left: .3rem;
                    color: rgb(219, 97, 26);
                }
            }
            .category {
                width: 4rem;
                padding-top: .2rem;
                .tag {
                    margin-top: .1rem;
                    margin-left: .1rem;
                }
            }
        }
    }
    .btn-div {
        background-color: white;
        height: 1.5rem;
        padding: .2rem .3rem .2rem .3rem;
        text-align: center;
        .btn {
            width: 85%;
            border-radius: 10px;
        }
    }
    .desc {
        background-color: white;
        padding: 0 .3rem .4rem .3rem;
        font-size: .4rem;
    }
    .last-capter {
        background-color: white;
    }
    .mulu {
        margin-top: .5rem;
        background-color: white;
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
</style>