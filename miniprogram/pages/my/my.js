// miniprogram/pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      mbData:{},
      requestInfo:null,
      userInfo: {  //后台获取 为后台已授权会员
        avatarUrl:"../../images/logo.png",
        nickeName: {
          title: "昵称",
          value: "游客"
        },
        userTel: {
          title: "手机",
          value: "未填写"
        },
        userClass: {
          title: "班级",
          value: "未填写"
        }
      }
  },
  upInpvalue:function(e){  //接受信息修改组件的传值
      console.log(e)
      let upInpvalue = e.detail;
      this.data.userInfo[e.currentTarget.dataset.field] = upInpvalue
      this.setData({
        userInfo: this.data.userInfo
      })
  },
  getUserInfo:function(e){
      console.log(e)
      let upUserInfo = e.detail;
      this.data.userInfo.nickeName.value = upUserInfo.userInfo.nickName;
      this.data.userInfo.avatarUrl = upUserInfo.userInfo.avatarUrl;
      this.setData({
        userInfo: this.data.userInfo
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        mbData: getApp().globalData.mbData,
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取登陆信息授权组件方法
    this.authorizeModal = this.selectComponent('#authorize-modal');
    //调用检测登陆信息状态
    this.authorizeModal.checkUserLogin()  
    
    //this.userInfoFun();
    let userInfo = wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        //console.log(res)
        this.data.userInfo.nickeName.value = res.data.userInfo.nickName;
        this.data.userInfo.avatarUrl = res.data.userInfo.avatarUrl;
        this.setData({
          userInfo: this.data.userInfo
        })
      },fail(){
        console.log('缓存信息获取失败')
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})