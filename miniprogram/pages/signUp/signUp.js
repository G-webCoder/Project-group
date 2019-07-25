// pages/signUp/signUp.js
const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mbData:{},
    signData:{},
    isSelectshow:false,
    listActiveid:-1,
    selectList:[
      {
        name:'戏剧表演课'
      },
      {
        name: '少儿主持课'
      }
    ],
    selectOption:'请选择报名课程',
    formActionObject:{}  //存储报名信息
  },
  formActionFun:function(name,value){  //提交数据处理  name:属性名  ， value：属性值
    this.data.formActionObject[name] = value;
    /*if (this.data.formActionObject[name]){
      inpValueobject[name] = value;
      this.data.formAction.push(inpValueobject)  //动态添加属性和值
      return;
    }*/
    console.log(this.data.formActionObject);
  },
  getinptValue(e){
    //console.log(e.detail.value);
    let inpvalue = e.detail.value;
    if (e.currentTarget.id == "usertel"){ //手机号码验证
        if(!(/^1[3456789]\d{9}$/.test(inpvalue))){
          $Toast({
            content: '手机号码错误！',
            duration: 2,
            image: '../../images/icon-mb.png'
          });
        }
    } else if (!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(inpvalue))){ //姓名输入验证
      $Toast({
        content: '请正确填写姓名！',
        duration: 2,
        image: '../../images/icon-mb.png'
      });
    }
    this.formActionFun(e.currentTarget.id,inpvalue);
  },
  selectListshow(){  //下拉列表的显隐
    let that = this;
    this.setData({
      isSelectshow: !that.data.isSelectshow
    })
  },
  _selectOption(e){  //下拉列表选项  选择
    let that = this; 
    let selectValue = e.currentTarget.dataset.selectvalue;
    let selectId = e.currentTarget.dataset.selectid
    console.log(e)
    this.formActionFun(e.currentTarget.id, selectValue);
   // console.log(e)
    this.setData({
      selectOption: selectValue,
      listActiveid: selectId
    })
  },
  formActionsend(){  //发送提交
    //检测缓存用户信息
    if (!wx.getStorageSync('userInfo')) {  //未查询到缓存信息
      //调用检测登陆信息状态
      this.authorizeModal.checkUserLogin();
      return;
    };
    console.log(this.data.formActionObject.username)
  //数据提交前验证
    if (!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(this.data.formActionObject.username))){
      $Toast({
        content: '请正确填写姓名！',
        duration: 2,
        image: '../../images/icon-mb.png'
      });
      return false;
    } else if (!(/^1[3456789]\d{9}$/.test(this.data.formActionObject.usertel))){
      $Toast({
        content: '手机号码错误！',
        duration: 2,
        image: '../../images/icon-mb.png'
      });
      return false;
    } else if (this.data.selectOption == "请选择报名课程" && !this.data.formActionObject.userclass){
      $Toast({
        content: '请选择报名课程',
        duration: 2,
        image: '../../images/icon-mb.png'
      });
      return false;
  }
    console.log('数据已提交')
  },
  elementFun(){  //文档点击事件
    this.setData({
      isSelectshow:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取登陆信息授权组件方法
    this.authorizeModal = this.selectComponent('#authorize-modal');
    this.setData({
      mbData: getApp().globalData.mbData,
      signData: getApp().globalData.mbData[options.field][options.id]
    })
    console.log(getApp().globalData)
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