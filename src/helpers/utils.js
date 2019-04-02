function timeFilter(date) {
  let lastTime = typeof date === 'object'? date : new Date(date)
  let nowTime = new Date()
  let timeDiff = nowTime - lastTime
  let seconds = timeDiff / 1000
  let str = ''
  switch (true) {
    case seconds < 60:
      str = '刚刚'
      break;
    case (seconds / 60) < 60:
      str = parseInt(seconds / 60) + '分钟前'
      break;
    case (seconds / 3600) < 24:
      str = parseInt(seconds / 3600) + '小时前'
      break;
    case (seconds / 86400) < 30:
      str = parseInt(seconds / 86400) + '天前'
      break;
    case (seconds / 2592000) < 12:
      str = parseInt(seconds / 2592000) + '月前'
      break;
    default:
      str = parseInt(seconds / 3110400) + '年前'
      break;
  }
  return str
}


export default {
  install(Vue, options){
    Vue.prototype.$timeFilter = timeFilter
  }
}