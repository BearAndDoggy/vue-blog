<template>
  <div class="login">
    <div class="form">
      <label for>
        用户名：
        <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
      </label>
      <label for>
        密码:
        <el-input placeholder="请输入用户名" v-model="password" show-password></el-input>
      </label>
      <el-button type="primary" round @click="onLogin">立即登录</el-button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import store from '../store/index.js'

export default {
  name: '',
  data(){
    return {
      username:'',
      password: '',
    }
  },
  methods: {
    ...mapActions(["login"]),
    onLogin(){
      this.login({username: this.username, password: this.password})
      .then(()=>{
        this.$router.push({path: this.$route.query.redirect || '/'})
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login {
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
  .login {
    .form {
      width: 40vw;
    }
  }
}
</style>
