<!-- 章节内容 -->
<template>
  <div class="main" :style="{background:backColor}" >
      <!-- 标题 -->
      <div class="title-div">
          <span>{{chapter.title}}</span>
      </div>
      <!-- 内容 -->
      <div>
           <pre class="pre-con" :style="{color:fontColor}" v-html="chapter.text"></pre>
      </div>
      <!-- 按钮 -->
      <div class="btn-div">
        <van-row>
            <van-col span="8"><van-button type="default" >上一章</van-button></van-col>
            <van-col span="8"><van-button type="default" >目录</van-button></van-col>
            <van-col span="8"><van-button type="default" >下一章</van-button></van-col>
        </van-row>
      </div>
      <!-- 空白，可以广告 -->
      <div style="height: 100px">

      </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter',
  data () {
    return {
        backColor: 'rgb(242,235,217)',
        fontColor: '#555555',
        chapter: {
            title: '第三章 莫干寻剑',
            text: '<p>“忽”一下，还没来得及看清窗外的景色是怎么一回事儿，一切便过眼云烟了。与车厢内静静坐在软席座位上读书看报、把玩手机的乘客形成强烈的对比。阳光从窗外照射进来显得格外的刺眼，朱鑫羽连忙拉下车窗上面独特的窗帘，生怕强烈的光线照射到坐在身旁那位心仪的女生——秦青。</p><p>朱鑫羽静静地看着闭目养神的秦青，整颗心不觉“砰砰”乱跳起来。她长长的秀发披在肩上，白皙的皮肤，秀气的鼻子，饱满的小嘴构成了一幅天然而美丽的画面。紧闭的双眼睫毛微翘，娥眉淡淡的蹙着，在她细致的脸蛋上扫出浅浅的忧虑，让她原本美得出奇的容貌更添了一份我见犹怜的心动。洁白的连衣裙上装饰着蕾丝花纹，白皙的双手重叠一起显得高雅大气。眼前的这一切让朱鑫羽想入非非，他急忙转开头不敢多视，怕玷污了心目中这位纯洁的女神。他靠在车厢窗壁上慢慢地将眼睛闭上，思索着即将呈现眼前的黄梧宗祠，多年以来的夙愿终于可以达成了。</p><p>约莫行驶了两个钟头，动车慢慢地驶进隧道，一片漆黑后又慢慢地驶入站台。车厢内甜美的声音从广播中传出，漳州站到了。</p><p>朱鑫羽领着秦青步出车站，印入眼眸的是宽阔的广场，广场尽头左手边是个旗台，旗台为大理石所砌，雕龙画柱十分美观。这时，迎面而来的是在站外等候载客的出租车司机，他们高喊着载送地点，见人便问“去不去”。朱鑫羽已来过漳州不下十次，很有经验地询问车价，与秦青搭着出租车直奔漳州市芗城区。车上，秦青狐疑的询问道：“我们不是要去漳窑村吗，为什么要先去漳州啊？”</p><p>朱鑫羽连忙解释：“漳州</p>'
        }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
  created() {}
}

</script>
<style lang='scss' scoped>
.main {
    .title-div {
        padding: .1rem .2rem 0 .2rem;
        font-size: .5rem;
        color: #2e343f;
        line-height: 1.7;
        font-weight: bold;
        text-align: center;
    }
    .pre-con{
        padding: 0 .2rem 0 .2rem;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-size: .5rem;
        color: #2e343f;
        line-height: 1.7;
    }
    .btn-div {
        text-align: center;
        .van-button {
            background-color: rgb(246, 248, 248);
            width:90%;
        }
    }
}
</style>