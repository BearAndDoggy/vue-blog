<template>
  <div class="index">
    <ul>
      <li v-for="blog in blogs">
        <router-link :to="`/details/${blog.id}`"><h2>{{blog.title}}</h2></router-link>
        <img :src="blog.user.avatar" alt="">
        <span>{{blog.user.username}}</span>
        <p>{{blog.description}}</p>
        <span class="time">{{$timeFilter(blog.createdAt)}}</span>{{blog.createdAt}}
      </li>
    </ul>
    <el-pagination background layout="prev, pager, next" :total="total" :current-page="page"
      @current-change="changePage"></el-pagination>
       <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script>
import fetchBlog from '../api/blog.js'
export default {
  name: '',
  data() {
    return {
      blogs: [],
      total: null,
      page: 1
    }
  },
  created(){
    this.page = parseInt(this.$route.query.currentPage, 10) || 1
    this.getBlogLists({page: this.page})
  },
  methods: {
    getBlogLists({page=1} = {page:1}) {
      fetchBlog.getBlogLists({atIndex: true, page}).then(res=>{
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
    },
    changePage(newPage){
      this.getBlogLists({page: newPage})
      this.$router.push({path: '/', query: {currentPage: newPage}})
    }
  },
}
</script>
<style scoped>
</style>
