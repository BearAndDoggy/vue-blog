<template>
  <div :class="[{login: isLogin},{nologin: !isLogin}, 'header']">
    <template v-if="!isLogin">
      <h1>My Blog</h1>
      <p>分享你的知识，汇聚精品博客</p>
      <div class="button">
        <router-link :to="{name: 'register'}">
          <el-button type="success">立即注册</el-button>
        </router-link>
        <router-link to="/login">
          <el-button type="success">立即登录</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <div class="wrap">
        <h1>My Blog</h1>
        <router-link to="/create">
          <i class="el-icon-edit-outline"></i>
        </router-link>
        <img :src="user.avatar" :alt="user.username">
        <button @click="onLogout">注销</button>
        <router-link to="/my"><button>我的</button></router-link>
        
      </div>
    </template>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: '',
  data(){
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      "user",
      "isLogin"
    ])
  },
  created(){
    this.checkLogin()
  },
  methods: {
    ...mapActions([
      "checkLogin",
      "logout"
    ]),
    onLogout(){
      this.logout().then(()=>{
        this.$router.push({path: '/login'})
      })
    }
  }

}
</script>
<style lang="less" scoped>
@import "../assets/base.less";

.header.nologin {
  background: @bgGradient;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: 30px;
    font-size: 50px;
    color: aliceblue;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  p {
    color: white;
  }
  .button {
    margin: 30px 0;
    .el-button {
      margin: 0 20px;
    }
  }
}

.header.login {
  background: @bgGradient;
  .el-icon-edit-outline {
    font-size: 30px;
    color: antiquewhite;
  }
}
@media (max-width: 500px) {
.header.login {
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
