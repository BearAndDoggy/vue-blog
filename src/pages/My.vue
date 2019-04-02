<template>
  <div class="my">
    <img :src="user.avatar" alt class="avatar">
    <span class="username">{{user.username}}</span>
    <ul>
      <li v-for="blog in myBlogs" :key="blog.id">
        <h2>{{blog.title}}</h2>
        <p>{{blog.description}}</p>
        <span class="year">{{showTime(blog.createdAt).year}}</span>
        <span class="month">{{showTime(blog.createdAt).month}}月</span>
        <span class="day">{{showTime(blog.createdAt).day}}</span>
        <span class="edit">编辑</span>
        <span class="delete" @click="deleteArticle(blog.id)">删除</span>
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

    }
  }
}
</script>
<style scoped>
</style>
