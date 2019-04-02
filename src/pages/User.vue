<template>
  <div class="user">
    <img :src="user.avatar" alt="" class="avatar">
    <span class="username">{{user.username}}</span>
    <ul>
      <li v-for="blog in blogs">
        <span class="time">{{timeCompute(blog.createdAt).year}}</span>
        <span class="time">{{timeCompute(blog.createdAt).month}}月</span>
        <span class="time">{{timeCompute(blog.createdAt).day}}</span>
        <h1>{{blog.title}}</h1>
        <p>{{blog.description}}</p>
      </li>
    </ul>
    <el-pagination background layout="prev, pager, next" :total="total" :current-page="page"
      @current-change="changePage"></el-pagination>
  </div>
</template>
<script>
import blog from '../api/blog.js'
export default {
  name: '',
  data(){
    return {
      blogs: [],
      user: {},
      total: null,
      page: 1
    }
  },
  created(){
    this.page = parseInt(this.$route.query.newPage) || 1
    this.fetchBlogs({page: this.page})
  },
  computed: {

  },
  methods: {
    fetchBlogs({page=1}={page: 1}){
      blog.getBlogLists({userId: this.$route.params.userId, page})
      .then(res=>{
        console.log(res);
        this.blogs = res.data
        this.user = res.data[0].user
        this.total = res.total
      })
    },
    timeCompute(date){
      let time = typeof date === 'object'? date : new Date(date)
      return {
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        day: time.getDate()
      }
    },
    changePage(newPage){
      this.page = newPage
      this.fetchBlogs({page: newPage})
      this.$router.push({path: `/user/${this.user.id}`, query: {newPage}})
    }
  }
}
</script>
<style scoped>

</style>
