<template>
  <div class="details">
    我是详情页
    <h2>{{title}}</h2>
    <img :src="user.avatar" alt="">
    <router-link :to="`/user/${user.id}`"><span>{{user.username}}</span></router-link>
    <span class="time">{{$timeFilter(createdAt)}}</span>
    <div class="content">{{content}}</div>
  </div>
</template>
<script>
import blog from  '../api/blog.js'
export default {
  name: '',
  data(){
    return {
      title: '',
      content: '',
      user: {},
      createdAt: ''
    }
  },
  created(){
    const blogId = this.$route.params.blogId
    this.fetchBlog(blogId)
  },
  methods: {
    fetchBlog(blogId){
        blog.getBlogDetail(blogId).then(res=>{
          this.title = res.data.title
          this.content = res.data.content
          this.user = res.data.user
          this.createdAt = res.data.createdAt
        })
      } 
  }
}
</script>
<style scoped>

</style>
