<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <TopBar image="http://www.uugai.com/img/index_img/35.jpg" />
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
      asasas<br>asasas<br>asasas<br>asasas<br>asasas<br>
    </div>
    
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
export default {
  data() {
    return {
      list: [
        'Vue-cli4',
        '配置多环境变量',
        'VantUI 组件按需加载',
        'Sass 全局样式',
        'Webpack 4',
        'Vuex 状态管理',
        'Axios 封装及接口管理',
        'Vue-router',
        'Webpack 4 vue.config.js 基础配置',
        '配置 proxy 跨域',
        '配置 alias 别名',
        '配置 打包分析',
        '配置 externals 引入 cdn 资源',
        '去掉 console.log',
        'splitChunks 单独打包第三方模块',
        '添加 IE 兼容',
        'Eslint+Pettier 统一开发规范'
      ]
    }
  },

  computed: {},

  mounted() { },

  methods: {},

  components: {
    TopBar
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .warpper {
    background: #fff;
  }
}
</style>
