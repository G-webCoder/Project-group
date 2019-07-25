// miniprogram/pages/addRelease/addRelease.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bytenumber:0,
      bytepoint:'',
      uploadFilePath:'',
      uploadFileWidth:'',
      isupload:false,
      loginCheck: false
  },
  getUserInfo: function (e) {  //接受授权组件用户信息传值
    console.log(e.detail.userInfo)
    if (e.detail) {  //检测用户信息是否授权
      this.setData({
        loginCheck: true,
      })
    }
  },
  /* 输入字节长度监听*/
  TextareaChange:function(e){
    let that =this;
    that.setData({
      bytenumber: e.detail.value.length
    });
   
      if(e.detail.value.length >= 200){
        that.setData({
          bytepoint:'超出最大输入数'
        })
      }else{
        that.setData({
          bytepoint: ''
        })
      }
      
      ;
  },
  VideoSlect:function(){
    var that = this;
      wx.chooseVideo({
        sourceType: ['camera','album'],
        camera: 'back',
        success(res){
          console.log('视频调用成功')
          that.data.uploadFilePath = res.data;
          wx.getSystemInfo({
            success: function(res) {
              if (that.data.uploadFileWidth>res.windowWidth-40){
                that.data.uploadFilePath = "100%"
              }
              console.log(res.windowWidth)
            },
          })
          console.log(res)
          that.setData({
            isupload:true,
            uploadFileWidth: res.width+'rpx',
            uploadFilePath: res.tempFilePath
          })
        },
        fail(){
          console.log('调用失败！')
        }
      })
  },
  ReleaseSendFun:function(){  //发布/提交
    if (!wx.getStorageSync('userInfo')) {  //未查询到缓存信息
      //调用检测登陆信息状态
      this.authorizeModal.checkUserLogin();
      return;
    }
    console.log('提交')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.authorizeModal.checkUserLogin();
    //检测缓存用户信息
    if (!wx.getStorageSync('userInfo')) {  //未查询到缓存信息
      this.setData({
        loginCheck: false
      })
      return;
    }else{
      this.setData({
        loginCheck: true
      })
    }
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