// component/request/request.js
const { $Toast } = require('../../dist/base/index');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mbData: {
      type:Object,
      value:"default value"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      requestUrl:'https://easy-mock.com/mock/5cf79d83c0cebd1746ff9df4/WeChatPorject/wechatporject/mbdata.json'
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
      mbDataRequest:function(){  //数据请求
        //let that = this;
        //console.log(this.data)
        wx.showNavigationBarLoading() //在标题栏中显示加载
        wx.request({
          url: this.data.requestUrl,
          method: 'post',
          dataType: 'json',
          header: {
            'content-type': 'application/text'
          },
          success:(res)=>{
            this.properties.mbData = res.data
            this.setData({
              mbData: res.data
            });
            getApp().globalData.mbData = res.data;
            wx.hideNavigationBarLoading() //完成停止加载
            wx.stopPullDownRefresh() //停止下拉刷新
            console.log(this.properties)
          },
          fail:()=>{
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
        console.log(this.properties)
      }
  }
})
