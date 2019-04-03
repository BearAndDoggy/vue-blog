<template>
  <div class="my">
    <div class="user">
      <img :src="user.avatar" alt class="avatar">
      <div class="message">
        <p class="username">{{user.username}}</p>
        <p class="total">文章：{{total}}</p>
      </div>
    </div>
    <ul class="blogs">
      <li v-for="blog in myBlogs" :key="blog.id">
        <div class="time">
          <p class="day">{{showTime(blog.createdAt).day}}</p>     
          <p class="month">{{showTime(blog.createdAt).month}}月</p> 
          <p class="year">{{showTime(blog.createdAt).year}}</p>  
        </div>
        <div class="blog">
          <h2>{{blog.title}}</h2>
          <p>{{blog.description}}</p>
          <div class="edit">
            <router-link :to="`/edit/${blog.id}`">
              <span class="edit">编辑</span>
            </router-link> 
            <span class="delete" @click="deleteArticle(blog.id)">删除</span>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import blog from '../api/blog.js'

export default {
  name: '',
  data() {
    return {
      myBlogs: [],
      total: null,
      page: 1
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.page = parseInt(this.$route.query.newPage, 10)
    this.fetchMyBlogs({ page: this.page })
  },
  methods: {
    fetchMyBlogs({ page = 1 } = { page: 1 }) {
      blog.getBlogLists({ userId: this.user.id, page }).then(res => {
        this.myBlogs = res.data
        this.total = res.total
      })
    },
    showTime(date) {
      let time = typeof date === 'object' ? date : new Date(date)
      return {
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        day: time.getDate()
      }
    },
    changePage(newPage) {
      this.page = newPage
      this.fetchMyBlogs({ page: newPage })
      this.$router.push({ path: '/my', query: { newPage } })
    },
    async deleteArticle(blogId) {
      await this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog(blogId)
      this.fetchMyBlogs()
      this.$message({
        type: 'success',
        message: '删除成功!'
      })

    },
  }
}
</script>
<style lang='less' scoped>
  .my {
    width: 75%;
    margin: 0 auto;
    .user {
      display: flex;
      img {
        border-radius: 50%;
        margin-right: 20px;
      }
      .username {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .total {
        color: #888888;
      }
    }
    .blogs {
      li {
        display: flex;
        margin: 15px 10px;
        .time{
          margin-right: 15px;
          p {
            padding: 1px 5px;
            text-align: center;
            color: #888888;
            &:first-child {
              color: #007cdc;
              font-size: 35px;
            }
          }
        }
        .blog {
          h2 {
            padding: 7px 0;
          }
          p {
            
          }
          .edit {
            margin-top: 5px;
            color: #007cdc;
            span {
              padding-right: 10px;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .el-pagination {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
