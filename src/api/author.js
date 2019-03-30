import request from '../request/request-axios'

const url = {
  register: '/auth/register',
  login: '/auth/login',
  logout: '/auth/logout',
  get_info: '/auth'

}

export default {
  register({username, password}){
    return request(url.register, 'POST', {username, password})
  },
  login({username, password}){
    return request(url.login, 'POST', {username, password})
  },
  logout(){
    return request(url.logout)
  },
  get_info(){
    return request(url.get_info)
  }
}