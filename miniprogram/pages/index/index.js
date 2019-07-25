Page({

  /**
   * 页面的初始数据
   */
  data: {
    mbData:{},  //请求数据存储
    imgUrls: [
      '../../images/course_banner.jpg',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true, //是否显示视点
    autoplay: true,  //自动切换
    circular:true,  //衔接滑动
    easingFunction:'default',  //切换缓动类型
    indicatorColor:'rgba(255,255,255,.4)',
    indicatorActive:'#fe8d55',  //选中指示点颜色
    interval: 5000,
    duration: 1000,
    rechBottomShow:false,
    staicTimer:"5 28,2015,23:30:28"
  },
  /*ArticleNavigate:function(e){  //文章页跳转
    console.log(e.currentTarget.dataset.articleurl)
    let articleurl = e.currentTarget.dataset.articleurl;
    wx.navigateTo({
      url: articleurl,
      success:function(){

      },
      fail:function(){

      }
    })
  },*/
  onRequestEvent:function(e){  //接受请求组件传值
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据请求组件
    this.dataRequest = this.selectComponent("#mb-datarequest");
    this.dataRequest.mbDataRequest();  //调用请求数据方法
    this.setData({
      mbData: this.dataRequest.properties.mbData
    })
    console.log(this.data.mbData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    //时间计算
    Timer()
    function Timer(){
      var timer = new Date();
      var timeCha = ''  //时间差
      //console.log(timer - that.data.staicTimer)

      if (that.data.staicTimer){ //刚刚

      }
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   /* wx.getStorage({  //获取缓存的用户信息数据
      key: 'userInfo',
      success(res) {
        console.log(res.data)
        getApp().globalData.userInfo = res.data
      },
      fail(){
        console.log('获取失败')
      }
    })*/
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
    this.dataRequest.mbDataRequest();  //请求数据
    //console.log(this.dataRequest.properties)
    console.log(this.dataRequest.properties.mbData)
    this.setData({
      mbData: this.dataRequest.properties.mbData
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