<!-- 目录页面 -->
<template>
  <div class="main">
      <!-- 导航栏 -->
      <van-sticky>
      <div>
        <van-nav-bar title="目录（共1443章）" left-arrow @click-left="$router.go(-1)" >
            <template #right>
                <van-icon name="home-o" size="20" @click="$router.push('/')" />
            </template>
        </van-nav-bar>
      </div>
      </van-sticky>
      <!-- 下拉页码 -->
      <div>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
      </div>
      <!--目录-->
     <div class="mulu">
          <div class="content">
                <div v-if="muluList!=null && muluList.length>0">
                    <van-list
                    >
                        <div>
                            <van-cell v-for="mulu in muluList" :key="mulu.id" :title="mulu.name" value="免费" size="large" />
                        </div>
                    </van-list>
                    <van-pagination v-model="currentPage" :page-count="pageSize" mode="simple" style="margin-top: 10px" />
                </div>
                <van-empty v-if="muluList==null || muluList.length==0" image="error" description="暂无目录" />
          </div>
      </div>
      <!--空白部分，可以放广告-->
      <div style="height: 50px;"></div>
  </div>
</template>

<script>
import { NavBar, DropdownMenu, DropdownItem, Grid, Empty, Pagination } from 'vant';
export default {
  name: 'Catalog',
  data () {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '第1-20章', value: 0 },
        { text: '第21-40章', value: 1 },
        { text: '第41-60章', value: 2 },
      ],
      option2: [
        { text: '正序', value: 'a' },
        { text: '倒序', value: 'b' },
      ],
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
            {id: 11, name: '第十一章'},
            {id: 12, name: '第十二章'},
            {id: 13, name: '第十三章'},
            {id: 14, name: '第十四章'},
            {id: 15, name: '第十五章'},
            {id: 16, name: '第十六章'},
            {id: 17, name: '第十七章'},
            {id: 18, name: '第十八章'},
            {id: 19, name: '第十九章'},
            {id: 20, name: '第二十章'},
      ],
      currentPage: 1,
      pageSize: 12,
    };
  },

  components: {
      [NavBar.name]: NavBar, [DropdownMenu.name]: DropdownMenu, [DropdownItem.name]: DropdownItem, [Grid.name]: Grid, [Empty.name]: Empty, [Pagination.name]: Pagination
  },

  computed: {},

  mounted() {},

  methods: {},
  created() {}
}

</script>
<style lang='scss' scoped>
.main {
    .mulu {
        margin-top: .5rem;
        background-color: white;
    }
}
</style>