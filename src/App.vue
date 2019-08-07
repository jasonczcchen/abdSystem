<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <span>农业生产管理系统</span>
        <div>
          <i class="el-icon-s-custom"></i>
          <a href="#">登录</a>
          <el-button type="success">申请服务</el-button>
        </div>
      </el-header>
      <div class="container">
        <div class="aside">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#67C23A"
              text-color="#ffff"
              active-text-color="#ffd04b"
            >
              <el-menu-item>
                <div class="navItem"><router-link to="/homePage">首页</router-link></div>
              </el-menu-item>
              <el-menu-item>
                <div class="navItem"><router-link to="/sourceManage">农资管理</router-link></div>
              </el-menu-item>
              <el-menu-item disabled>
                <div class="navItem"><span slot="title">商品库</span></div>
              </el-menu-item>
              <el-menu-item disabled>
                <div class="navItem"><span slot="title">生产记录</span></div>
              </el-menu-item>
              <el-menu-item disabled>
                <div class="navItem"><span slot="title">产品溯源</span></div>
              </el-menu-item>
            </el-menu>
        </div>
        <div class="main">
          <source-manage></source-manage>
        </div>
      </div>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import homePage from '@/components/homePage'
  import sourceManage from '@/components/sourceManage'
  export default {
    name: 'App',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      sourceManage,
      homePage
    }
  }
</script>

<style>
  #app{
    height:100%;
  }
  .navItem{
    font-size: 20px;
  }
  .header{
    display:flex;
    justify-content:space-between;
    font-size: 20px;
    color:white;
  }
  span,i,a{
    color:white;
  }
  .container{
    display:flex;
    justify-content:center;
    flex-direction:row;
    height:760px;
    background-color: #dde5da;
  }
  .aside{
    width:15%;
    height:100%;
    margin-top: 100px;
  }
  .main{
    margin-top:15px;
    width:70%;
    height:95%;
    background-color: #ffffff;
  }
  .el-menu-item{
    height:80px;
    text-align:center;
  }

.el-header, .el-footer {
  background-color: #82c942;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
