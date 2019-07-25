var app = getApp()
Page({
  data: {  //参与页面渲染数据
    enterName:"萌校宝艺术教育资讯",
    entroduce:"【蕃茄田艺术】3-15岁孩子的国际艺术学校创办于2009年,专注于2到15岁的创新少儿艺术教育。2017年全国已超过400家校区,每年有超过10万个孩子在蕃茄田艺术成长",
    tell:'4008-030-394',
    location:'',
    gap:0,
    fromLng:0,
    fromLat:0,
    currentLocattion:{
      longitude:0,
      latitude:0
    },
    targetLocation:{
      longitude: 114.160424,
      latitude: 22.741115,
      name: "萌校宝艺术教育少儿艺术中心",
      address: "广东省东莞市翰东技工学校"
    },
    posterUrl:'',
    menthod:function(){
      this.gap = getDistance(this.targetLocation.longitude, this.targetLocation.latitude, fromLng, fromLat);
     // console.log(getDistance(this.targetLocation.longitude, this.targetLocation.latitude, fromLng, fromLat))
    }
  },
  //距离计算函数
  getDistance: function (la1, lo1, la2, lo2) {
    var La1 = la1 * Math.PI / 180.0;
    var La2 = la2 * Math.PI / 180.0;
    var La3 = La1 - La2;
    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    s = s.toFixed(2);
    
    //大于1000转换km
    s = s >= 1000 ? s/1000:s;
   // console.log(s)
    return s.toFixed(2);
  },
  //获取当前用户位置
  getPosition: function () {
    wx.getLocation({
      success: (res)=> {
        this.data.currentLocattion.longitude = res.longitude,
        this.data.currentLocattion.latitude = res.latitude
      }
    })
  },
  openLocation:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: (res)=> {  //因为这里得到的是你当前位置的经纬度
        let latitude = res.latitude
        let longitude = res.longitude
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: latitude,
            longitude: longitude,
            width: 50,
            height: 50,
            iconPath: "/assests/imgs/my.png",
            title: this.data.targetLocation.name
          }]
        }),
        wx.openLocation({        //打开显示目标的位置
          latitude: this.data.targetLocation.latitude,
          longitude: this.data.targetLocation.longitude,
          name: this.data.targetLocation.name,
          address: this.data.targetLocation.address,
          scale: 16
        })
      }
    })
  },
  PoneCall:function(){
    let phone = this.data.tell;
    wx.makePhoneCall({
      phoneNumber: phone.replace(/-/g,'') //电话数据处理 去除-
    })
    console.log(phone)
  },
  //事件处理函数
  onLoad: function () {  
    this.getPosition()
  },
  onShow:function(){
    let gap = this.getDistance(this.data.targetLocation.longitude, this.data.targetLocation.latitude, this.data.currentLocattion.longitude, this.data.currentLocattion.latitude);
      this.setData({
        gap: gap
      })
  }
})