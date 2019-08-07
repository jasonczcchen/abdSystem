<template>
  <div class="box">
    <span class="it" style="font-size:30px;font-weight:bold;color:black ">个人</span>
    <div class="person">
      <div class="box-item"><img class="bigger" src="../../static/image/库存.png" alt=""></div>
      <div class="box-item"><img class="bigger" src="../../static/image/记录.png" alt=""></div>
      <div class="box-item"><img class="bigger" src="../../static/image/汇总.png" alt=""></div>
    </div>
      <span class="it" style="font-size:30px;font-weight:bold;color:black ">企业</span>
    <div class="company">
      <div class="box-item"><img class="bigger" src="../../static/image/qiye-库存.png" alt=""></div>
      <div class="box-item"><img class="bigger" src="../../static/image/qiye-记录.png" alt=""></div>
      <div class="box-item"><img class="bigger" src="../../static/image/qiye-汇总.png" alt=""></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sourceManage"
    }
</script>

<style>
  .person{
    display:flex;
    justify-content:space-around;
    align-items:center;
    /*background-color: red;*/
    height:50%;
    /*border:1px solid;*/
  }
  .company{
    display:flex;
    justify-content:space-around;
    align-items:center;
    /*background-color: green;*/
    height:50%;
    /*border:1px solid;*/
  }
  .box{
    display:flex;
    flex-direction:column;
    /*border:1px solid;*/
    height:100%;
  }
  .box-item{
    /*border:1px solid;*/
    background-color: white;
    height:60%;
    width:15%;

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
