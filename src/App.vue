<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <div><img/></div>
        <div class="left">
          <el-button class="el-icon-message" type="info">反馈</el-button>
          <a href="#"><el-button class="el-icon-s-custom" type="info">登录</el-button></a>
          <el-button type="info">申请服务</el-button>
        </div>
      </el-header>
      <div class="bannerBox"><div class="banner">农业生产管理系统</div></div>

      <div class="container">
        <div class="aside">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item>
                <router-link to="/homePage"><div class="navItem el-icon-menu">&nbsp;&nbsp;首页</div></router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/sourceManage"><div class="navItem el-icon-setting">&nbsp;&nbsp;农资管理</div></router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/page1"><div class="navItem el-icon-s-order">&nbsp;&nbsp;商品库</div></router-link>
              </el-menu-item>
              <el-menu-item disabled>
                <router-link to=""><div class="navItem el-icon-s-data" >&nbsp;&nbsp;生产记录</div></router-link>
              </el-menu-item>
              <el-menu-item disabled>
                <router-link  to="" ><div class="navItem el-icon-s-help">&nbsp;&nbsp;产品溯源</div></router-link>
              </el-menu-item>
              <el-menu-item disabled>
                <router-link  to="" ><div class="navItem el-icon-s-help">&nbsp;&nbsp;信息反馈</div></router-link>
              </el-menu-item>
              <el-menu-item disabled>
                <router-link  to="" ><div class="navItem el-icon-s-help">&nbsp;&nbsp;关于我们</div></router-link>
              </el-menu-item>
            </el-menu>
        </div>
        <div class="main">
          <router-view/>
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
  .bannerBox{
    background-image: url("../static/image/bird-bj.jpg");
    display:flex;
    justify-content: center;
    align-items: center;
    height:220px;
  }
  .banner{
    color: rgba(255,255,255,1);
    margin-top: 80px;
    background-color: rgba(255,255,255,0.3);
    text-align: center;
    line-height: 100px;
    font-weight:bold;
    font-size: 50px;
    width:40%;
    height:50%;
    border:3px solid white;
  }
  .el-menu{
    background-color:#dde5da;
    display:flex;
    flex-direction: column;
    align-items: center;
    height:40%;
  }
  .el-menu :hover{
    background-color: white;
    color: green;
  }
  .el-menu-item{
    width:100%;

    margin-top:10px;
    background-color: #1fc231;
    border:3px solid #67C23A;
  }

  a{
    text-decoration : none
  }
  .router-link{
    text-decoration : none
  }
  #app{
    height:100%;
  }
  .navItem{
    margin-top: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:white;
    line-height:100px;
    height:70%;
  }
  .navItem:hover{
    margin-top: 10px;
    line-height:100px;
    font-size: 20px;
    font-weight: bold;
    height:70%;
  }

  span,i,a{
    color:white;
  }
  .container{
    display:flex;
    justify-content:center;
    flex-direction:row;
    height:680px;
    background-color: #dde5da;
  }
  .aside{
    width:15%;
    height:60%;
    margin-top: 100px;
    background-color:#dde5da
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

.el-footer {
  background-color: rgba(21, 150, 36, 0.9);
  color: #333;
  text-align: center;
  line-height: 60px;
}
  .header{
    display:flex;
    align-items: center;
    justify-content:space-between;
    font-size: 20px;
  }
.el-header{
  width:100%;
  position:fixed;
  background-color: rgba(21, 150, 36, 0.9);
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
