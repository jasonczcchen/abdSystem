<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
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
              <el-menu-item index="0">
                <span slot="title">导航</span>
              </el-menu-item>
              <el-menu-item index="1">
                <span slot="title">导航</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">导航</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <span slot="title">导航</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">导航</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">导航</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title">导航</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title">导航</span>
              </el-menu-item>
            </el-menu>
        </div>
        <div class="main">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  	<tr><td>&nbsp;</td></tr>
                	<tr>
                    	<td>
                        	<a href="http://xxgk.scau.edu.cn/" title="信息公开" target="_balnk"><img src="image/fw_img.jpg"></a>
                        </td>
                    	<td>
                        	<a href="http://estop.scau.edu.cn/portal/service_guide.jsp?gid=1" title="校长信箱" target="_balnk"><img src="image/fw_img1.jpg"></a>
                        </td>
                    	<td>
                        	<a target="_balnk" href="http://web.scau.edu.cn/map/" title="校园地图"><img src="image/fw_img2.jpg"></a>
                        </td>
                    </tr>
                    <tr style="Font-size:20px;Font-weight:bold;">
                    	<td>
                        	<a target="_balnk" href="http://xxgk.scau.edu.cn/" title="信息公开">信息公开</a>
                        </td>
                    	<td>
                        	<a target="_balnk" href="http://estop.scau.edu.cn/portal/service_guide.jsp?gid=1" title="校长信箱">意见信箱</a>
                        </td>
                    	<td>
                        	<a target="_balnk" href="http://web.scau.edu.cn/map/" title="校园地图">地图</a>
                        </td>
                    </tr>
                    <tr>
                    	<td>
                        	<a target="_balnk" href="http://202.116.160.98:8080/kfzy/index.html" title="开放教育资源"><img src="image/fw_img4.jpg"></a>
                        </td>
                        <td>
                        	<a target="_balnk" href="http://202.116.162.80/servlet/LinkServlet?action=8&pageNo=1" title="新媒体联盟"><img src="image/fw_img6.jpg"></a>
                        </td>
                        <td>
                        	<a target="_balnk" href="http://fao.scau.edu.cn/" title="对外交流"><img src="image/fw_img9.jpg"></a>
                        </td>
                    </tr>
                    <tr style="Font-size:20px;Font-weight:bold;">
                    	<td>
                        	<a target="_balnk" href="http://202.116.160.98:8080/kfzy/index.html" title="开放教育资源">开放教育资源</a>
                        </td>
                    	<td>
                        	<a target="_balnk" href="http://202.116.162.80/servlet/LinkServlet?action=8&pageNo=1" title="新媒体联盟">新媒体联盟</a>
                        </td>
                    	<td>
                        	<a target="_balnk" href="http://fao.scau.edu.cn/" title="对外交流">对外交流</a>
                        </td>
                    </tr>
          </table>
        </div>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  #app{
    height:100%;
  }
  .container{
    display:flex;
    justify-content:center;
    height:600px;
  }
  .aside{
    width:15%;
    height:100%;
    margin-top: 60px;
  }
  .main{
    margin-top:30px;
    width:70%;
    height:90%;
    background-color: #dde5da;
  }
  .el-menu-item{
    background-color: red;
    text-align:center;
  }

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
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
