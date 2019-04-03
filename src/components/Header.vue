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
        <div class="left"><router-link to="/"><h1>Share Your Thoughts</h1></router-link></div>
        <div class="right">
          <router-link to="/create">
            <i class="el-icon-edit-outline"></i>
          </router-link>
          <div class="avatar">
            <img :src="user.avatar" :alt="user.username">
            <ul>
              <li><router-link to="/my">我的</router-link></li>
              <li @click="onLogout">注销</li>
            </ul>
          </div>     
        </div>
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
        this.$router.push({path: '/'})
      })
    },

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
  margin-bottom: 20px;
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
  min-height: 90px;
  .wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: @bgGradient;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 15px 20px;
    .left {
      margin-left: 30px;
    }
    .right {
      display: flex;
      align-items: center;
      margin-right: 50px;
      i {
        font-size: 30px;
        color: white;
        margin-right: 30px;
      }
      .avatar {
        position: relative;
        &:hover ul{
          display: block;
        }
        ul {
          display: none;
          border: 1px solid #999;
          position: absolute;
          top: 100%;
          li {
            white-space: nowrap;
            text-align: center;
            background: white;
            color: black;
            padding: 10px 15px;
            &:hover {
              cursor: pointer;
              background: rgb(245, 245, 245);
            }
          }
        }
        img {
          border-radius: 50%;
          width: 35px;
        }
      }
    }
  }

}
@media (max-width: 500px) {
.header.login {
  min-height: 160px;
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
