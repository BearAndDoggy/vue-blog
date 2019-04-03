<template>
  <div class="index">
    <ul>
      <li v-for="blog in blogs">
        <div class="left">
          <router-link :to="`/details/${blog.id}`">
            <h2>{{blog.title}}</h2>
          </router-link>
          <span class="time">{{$timeFilter(blog.createdAt)}}</span>
          <p>{{blog.description}}</p>
        </div>
        <div class="right">
          <div class="avatar">
            <img :src="blog.user.avatar" alt>
          </div>
          <span>{{blog.user.username}}</span>
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
  created() {
    this.page = parseInt(this.$route.query.currentPage, 10) || 1
    this.getBlogLists({ page: this.page })
  },
  methods: {
    getBlogLists({ page = 1 } = { page: 1 }) {
      fetchBlog.getBlogLists({ atIndex: true, page }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
    },
    changePage(newPage) {
      this.getBlogLists({ page: newPage })
      this.$router.push({ path: '/', query: { currentPage: newPage } })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/base.less';
.el-pagination {
  margin: 40px 0 20px;
  text-align: center;
}
li {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 60%;
  .left {
    width: 85%;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    h2 {
      display: inline-block;
      margin-right: 10px;
      margin: 10px 0;
    }
    p {
      color: #777;
    }
    .time {
      color: @fontGrayColor;
      font-size: 13px;
    }
  }
  .right {
    width: 10%;
    text-align: center;
    color: @fontGrayColor;
    img {
      width: 30px;
      border-radius: 50%;
    }
  }
}
</style>
