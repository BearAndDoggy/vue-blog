<template>
  <div class="header">
    <template>
      <h1>My Blog</h1>
      <p>分享你的知识，汇聚精品博客</p>
      <div class="button">
        <el-button type="success">立即注册</el-button>
        <el-button type="success">立即登录</el-button>
      </div>
    </template>
    <template>
    </template>
  </div>
</template>
<script>
export default {
  name: '',
  data(){
    return {
      
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/base.less";

.header {
  background: @bgGradient;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: 30px;
    font-size: 50px;
    color: aliceblue;
  }
  p {
    color: white;
  }
  .button {
    margin: 40px 0;
    .el-button {
      margin: 0 20px;
    }
  }
}

@media (max-width: 500px) {
.header {
  h1 {
    margin-top: 10px;
    font-size: 30px;
  }
  .button {
    margin: 10px 0;
    .el-button {
      margin: 0 5px;
    }
  }
}
}
</style>
