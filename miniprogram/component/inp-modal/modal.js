// component/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inpValue:{
       type:Object,
       value:{}
     },
     test:{
       type:String,
       value:""
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
      isModalshow:false,
      inputFocus:true,
      testValue:"",
      starValue:"",
      testWay:{
        tel:"^1[34578][0-9]{9}$",   //手机号码验证
        email:"",  //邮箱验证
        name:""  //名字验证
      }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    InfoEdit:function(){
      this.setData({
        isModalshow: true
      })
    },
    InpblurFun:function(e){
     //this.data.starValue = e.detail.value
     this.setData({
       starValue: e.detail.value
     })
      // console.log(e.detail.value)
    },
    ModealsureFun:function(){  //Modeal确定 数据提交
      let sendValue = this.data.starValue;
      var setWay = RegExp(this.data.testWay[this.properties.test],'g');
      if (!setWay.test(sendValue) || sendValue == ""){
        console.log(sendValue)
          wx.showToast({
            title: "输入有误",
            icon: "none",
            duration: 2000
          })
          return;
      };
      console.log(sendValue)
      this.properties.inpValue.value = sendValue;
      this.setData({
        isModalshow: false
      })
      this.triggerEvent('upEditdata', this.properties.inpValue)  //修改数据传值出去
      console.log(this.properties.inpValue)
    },
    ModealcancelFun:function(){
      this.setData({
        isModalshow:false
      })
    }
  },
  ready:function (){
    this.data.starValue = this.properties.inpValue.value //默认值
    console.log(this.properties.test)
  }
})
