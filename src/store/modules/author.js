import author from "../../api/author"

const state = {
  user: null,
  isLogin: false
}
const getters = {
  user: (state)=> state.user,
  isLogin: (state)=>state.isLogin
}
const mutations = {
  setUser(state, userMessage){
    state.user = userMessage.user
  },
  setLogin(state, userMessage){
    state.isLogin = userMessage.isLogin
  }
}
const actions = {
  async register({commit}, {username, password}){
    const res = await author.register({username, password})
    commit("setUser", {user: res.data})
    commit("setLogin", {isLogin: true})
    return res.data
  },
  async login({commit},{username, password}){
    const res = await author.login({username, password})
    commit("setUser", {user: res.data})
    commit("setLogin", {isLogin: true})
  },
  async logout({commit}){
    await author.logout()
    commit("setUser", {user: null})
    commit("setLogin", {isLogin: false})
  },
  async checkLogin({commit, state}){
    if (state.isLogin) {return true}
    const res = await author.get_info()
    commit("setLogin", {isLogin: res.isLogin})
    if (!res.isLogin) {return false}
    commit("setUser", {user: res.data})
    return true
  }
}





export default {
  state,
  getters,
  mutations,
  actions
}