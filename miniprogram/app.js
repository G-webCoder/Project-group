//app.js
App({
  globalData:{  //全局数据缓存
    mbData:{},
    userInfo:{}
  },
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo')  //检测API可用
  },
  onLaunch: function () {
    
  }
})