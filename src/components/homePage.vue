<template>
  <div id="home">
    <div class="ite-box">
      <el-progress type="circle" :percentage="25"></el-progress>
      <span class="ite">商品库系统申请 </span>
      <span class="ite">审核中</span>
    </div>
    <div class="ite-box">
      <el-progress type="circle" :percentage="25"></el-progress>
      <span class="ite">生产记录系统申请</span>
      <span class="ite">审核中</span>
    </div>
    <div class="ite-box">
      <el-progress type="circle" :percentage="25"></el-progress>
        <span class="ite">产品溯源系统申请</span>
        <span class="ite">审核中</span>
    </div>
    <div class="ite-box">
      <el-progress type="circle" :percentage="25"></el-progress>
      <span class="ite">申请加入公司A</span>
      <span class="ite">审核中</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "homePage"
    }
</script>

<style>
  .ite-box{
    display:flex;
    flex-direction:column;
  }
  .ite{
    color:black;
  }
  #home{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
</style>
