// pages/trends/tabDiary/tabDiary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    let that = this;
    //再次请求数据  if数据res succeful
    wx.request({
      url: '../../data.json',
      method: 'get',
      dataType: 'json',
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        console.log(res)
        that.setDate({
          mbData: res.data
        });
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      },
      fail: function () {
        let t = setTimeout(function () {
          wx.hideNavigationBarLoading() //完成停止加载
          wx.stopPullDownRefresh() //停止下拉刷新
          $Toast({
            content: '抱歉，刷新失败',
            duration: 3,
            image: '../../images/icon-mb.png'
          });
          clearTimeout(t);
        }, 3000)
        console.log('数据请求失败！')
      }
    })
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