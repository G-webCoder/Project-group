// component/btn-modal/btn-modal.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true //继承外部样式(解决不继承app.wxss公共样式)
  },
  properties: {
    userInfo: {
      type: Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pointText: '登陆需要你的授权',
    loginFail: false,
    loginwindow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //检查授权信息方法
    checkUserLogin:function(){
      //session_key是否过期 && storage授权缓存信息
      wx.getStorage({
        key: 'userInfo',
        success: (res) => {  //缓存信息获取成功
          //检查登录状态是否过期
          wx.checkSession({
            success() {   //未过期
              console.log('session_key未过期')
              return;
            },
            fail: () => {  //session_key过期
              this.setData({  //拉起授权
                pointText: '登陆需要你重新授权',
                loginwindow: true
              })
              console.log('session_key已过期')
            }
          });
          console.log(res)
        }, 
        fail:()=>{  //缓存信息获取失败
          console.log('缓存信息获取失败')
          this.setData({  //拉起授权
            loginwindow: true
          })
        }
      })
    },
    getUserInfo: function (e) { //唤出微信授权
      wx.login({
        success: (res) => {
          //code
        }
      })
      if (e.detail.errMsg == "getUserInfo:ok"){  //授权成功
        //console.log(e)
        this.triggerEvent('authorizeUserInfo', e.detail)  //获取用户数据传值出去
        this.setData({
          loginwindow: false,
          properties: e.detail  //授权信息传值
        })
        //全局存储用户授权信息授权
        wx.setStorage({
          key: 'userInfo',
          data: e.detail
        });
      }else{  //授权失败或拒绝
        console.log(e.detail.errMsg)
      }
     /* wx.authorize({  //此接口将不再支持 唤出微信授权
        scope: "scope.userInfo",
        success:()=>{
          this.setData({
            loginwindow: false,
            pointText: '登陆需要你的授权'
          });
          //获取用户信息
          wx.getSetting({
            success: (res) => {
              console.log(res.authSetting['scope.userInfo'])  //授权结果
              //if (res.authSetting['scope.userInfo']) { // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getUserInfo({  //获取授权用户信息
                  success: res => {
                    //console.log(res)
                    this.triggerEvent('authorizeUserInfo', res)  //获取用户数据传值出去
                    //全局存储用户授权信息授权
                    wx.setStorage({
                      key: 'userInfo',
                      data: res
                    });
                    //this.properties.userInfo.isLogin = '已登陆';
                    this.setData({
                      loginwindow: false,
                      properties: res  //授权信息传值
                    })
                  },
                  fail: () => {
                    this.setData({
                      loginwindow: true
                    })
                  }
                })
            },
            fail: () => {  //获取失败
              console.log('获取用户信息失败')
            }
          }) 
          console.log('授权成功')
        },
        fail:() => {  //拒绝授权
          this.setData({
            loginwindow: true,
            pointText:'确定拒绝授权？'
          })
          console.log('授权拒绝')
        }
      })*/
    },
    closeLogin:function(){  //modal拒绝  关闭modal
      this.setData({  
        loginwindow:false,
        pointText: '登陆需要你的授权'
      })
    }
  },
  lifetimes: {  //组件生命周期
    attached: function () {
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
