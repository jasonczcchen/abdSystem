<template>
  <div class="box">
    <div class="person">
      <div class="title-content"><div class="personTitle el-icon-s-custom">个人</div></div>
      <div class="button-content">
        <el-button  class="source-button el-icon-s-home" type="primary">&nbsp;&nbsp;查看库存</el-button>
        <el-button class="source-button el-icon-s-claim" type="primary">&nbsp;&nbsp;查看记录</el-button>
        <el-button class="source-button el-icon-s-grid" type="primary">&nbsp;&nbsp;汇总</el-button>
      </div>
    </div>
    <div class="company">
      <div class="title-content"><div class="companyTitle el-icon-office-building">企业</div></div>
      <div class="button-content">
        <el-button class="source-button el-icon-s-home" type="warning">&nbsp;&nbsp;查看库存</el-button>
        <el-button class="source-button el-icon-s-claim" type="warning">&nbsp;&nbsp;查看记录</el-button>
        <el-button class="source-button el-icon-s-grid" type="warning">&nbsp;&nbsp;汇总</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sourceManage"
    }
</script>

<style>
  .personTitle{
    vertical-align:middle;
    font-size: 70px;
    color:#409EFF;
  }
  .companyTitle{
    vertical-align:middle;
    font-size: 70px;
    color:#E6A23C;
  }
  .title-content{
    display:flex;
    align-items: center;
    height:50%;
  }
  .button-content{
    height:50%;
    display:flex;
    flex-direction:column;
    background-color: white;
    justify-content:space-around;
    align-items:center;
  }
  .source-button{
    width:400px;
    height:80px;
    font-size: 30px;
  }
  .person{
    display:flex;
    flex-direction:column;
    background-color: white;
    justify-content:space-around;
    align-items:center;
    margin-left: 10px;
    /*background-color: red;*/
    width:50%;
    height:100%;
    /*border:1px solid;*/
  }
  .company{
    display:flex;
    background-color: white;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;
    margin-left: 10px;
    /*background-color: green;*/
    width:50%;
    height:100%;
    /*border:1px solid;*/
  }
  .box{
    background-color:  #dde5da;
    display:flex;
    flex-direction:row;
    /*border:1px solid;*/
    height:100%;
  }
  .box-item{
    /*border:1px solid;*/
    background-color: white;
    width:90%;
    height:100%;
  }
  .box-item :hover{
    box-shadow:4px 4px 10px #7c7c7c;
  }
  .it{
    margin-left:50px;
  }
  img.bigger{
    transition:transform 2s;
    width:100%;
    height:100%;
  }
  img.bigger :hover{
    transform: scale(1.2,1.2);
  }

</style>
