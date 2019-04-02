import request from '../helpers/request-axios'

const url = {
  blog_list: '/blog',
  blog_detail: '/blog/:blogId',
  create: '/blog',
  update: '/blog/:blogId',
  delete: '/blog/:blogId'
}

export default {
  getBlogLists({page=1, userId, atIndex} = {page:1}){
    return request(url.blog_list, 'GET', {page, userId, atIndex})
  },
  getBlogDetail(blogId){
    return request(url.blog_detail.replace(':blogId', blogId))
  },
  createBlog({title='', content='', description='', atIndex=false} = {title:'',content: '', description: '', atIndex: false}){
    return request(url.create, 'POST', {title, content, description, atIndex})
  },
  updateBlog(blogId, {title, content, description, atIndex}){
    return request(url.update.replace(':blogId', blogId), 'PATCH', {blogId, title, content, description, atIndex})
  },
  deleteBlog(blogId){
    return request(url.delete.replace(':blogId', blogId), 'DELETE')
  },
}