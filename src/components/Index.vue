<template>
  <div class="index">
    我是首页
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button :plain="true" @click="open">打开消息提示</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    open() {
      this.$message('这是一条消息提示')
    },
  }
}
</script>
<style scoped>
</style>
