<template>
  <div class="register">
    <div class="form">
      <label for>
        用户名：
        <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
      </label>
      <label for>
        密码:
        <el-input placeholder="请输入用户名" v-model="password" show-password></el-input>
      </label>
      <el-button type="primary" round @click="onRegister">立即注册</el-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: '',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    onRegister() {
      this.register({ username: this.username, password: this.password })
      .then(() => {
          this.$router.push({ path: '/' })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.register {
  margin-top: 5vw;
  .form {
    color: black;
    width: 20vw;
    margin: 0 auto;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    label {
      display: inline-block;
      .el-input {
        margin: 10px 0;
      }
    }
    .el-button {
      margin-top: 10px;
    }
  }
}

@media (max-width: 500px) {
  .register {
    .form {
      width: 40vw;
    }
  }
}
</style>
