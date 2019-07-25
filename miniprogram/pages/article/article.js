// miniprogram/pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      articleData:{},
      field:"",
     /* pageList:[
        {
          pageId:1,
          title:'',
          descable:'',
          imgUrl:[
            'https://www.z4a.net/images/2019/06/10/livelist03.jpg'
          ],
          thumbImg:[
            'https://www.z4a.net/images/2019/06/10/livelist03.jpg',
            'https://www.z4a.net/images/2019/06/10/livelist03.jpg',
            'https://www.z4a.net/images/2019/06/10/livelist03.jpg',
          ]
          
        },
        {
          pageId: 2,
          title: '',
          descable: '',
          imgUrl: [
            'https://www.z4a.net/images/2019/06/10/livelist03.jpg'
          ],
          thumbImg: [
            'https://www.z4a.net/images/2019/06/10/819535851.jpg'
          ]

        },
        {
          pageId: 3,
          title: '',
          descable: '',
          imgUrl: [
            'https://www.z4a.net/images/2019/06/10/livelist03.jpg'
          ],
          thumbImg: []
        }
      ]
      */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     // mbData:getApp().globalData,
      field: options.field,
      articleData: getApp().globalData.mbData[options.field]
    })
    console.log(this.data.articleData)
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