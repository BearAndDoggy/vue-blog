<template>
  <div class="create">
    <div class="wrap">
      <h1>编辑文章</h1>
      <label>文章标题：
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="title"></el-input>
      </label>
      <label for="">文章描述：
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="content"></el-input>
      </label>
      <label for="">文章内容：
        <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 10}" v-model="description"></el-input>
      </label>
      <div class="atIndex">
        <span>是否展示到首页：</span><el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <el-button type="primary" round @click="editContent">编辑文章</el-button>
    </div>
  </div>
</template>
<script>
import blogApi from '@/api/blog.js' 
export default {
  name: '',
  data(){
    return {
      blogId: '',
      atIndex: true,
      title: '',
      content: '',
      description: '',
    }
  },
  created(){
    this.blogId = this.$route.params.blogId
    this.fetchBlog(this.blogId)
  },
  methods: {
    editContent(){
      blogApi.updateBlog(this.blogId,{title: this.title,content: this.content,description: this.description, atIndex: this.atIndex})
      .then((res)=>{
        this.$message(res.msg)
        return res
      })
      .then((res)=>{
        console.log(res)
        this.$router.push({name:'details',params: {blogId: res.data.id}})
      })
    },
    fetchBlog(blogId){
      blogApi.getBlogDetail(blogId)
      .then(res=>{
        this.title = res.data.title
        this.content = res.data.content
        this.description = res.data.description
        this.atIndex = res.data.atIndex
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .create {
    margin: 0 auto;
    width: 80vw;
    .wrap {
      display: flex;
      flex-direction: column;
      h1 {
        margin-top: 20px;
        text-align: center;
      }
      label {
        display: inline-block;
        font-weight: 700;
        margin-bottom: 10px;
        .el-textarea {
          margin-top: 5px;
        }
      }
      .el-button {
        margin-top: 30px;
        width: 100px;
      }     
    }
  }
</style>
