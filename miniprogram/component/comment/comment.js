// miniprogram/component/comment/comment.js
Component({
  properties: {
    ratings:{
      type:Array,
      value:null
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
        userid:23,
        avatarUrl: '../../images/20180727085026_80456.jpg',
        nickname: '官小宝',
      },
      //userInfo:{},
      isInpArea:true,
      isEditArea:false,
      inpnumer:0,
      ispraise:false,
      iscollection:false,
      isLoginPoint:'请输入评论',
      upReplaypeople:null,
      praisenum:12,
      commentIndex: null,
      commmentCont:'',
     /* ratings:[
          {
          id:1,
          userid:0,
          avatar: '../../images/1631945237.jpg',
          nickename: '可可儿',
          timer: '2019-07-01',
          content: '完美测试中。。',
          replays:[
            {
              userinfo:{
                id:'11',
                avatar:'',
                nickename:'球球'
              },
              id:'0',
              timer:'',
              content:'我也来试试'
            }
          ]
        },
        {
          id: 2,
          userid: 1,
          avatar: '../../images/1631945237.jpg',
          nickename: '言外之意',
          timer: '2019-07-02',
          content:'不错，点赞哦'
        },
        {
          id: 3,
          userid: 2,
          avatar: '../../images/1631945237.jpg',
          nickename: '妍希外婆',
          timer: '2019-07-02',
          content: '来了，路过，嘻嘻~'
        }
      ]
  
  */
  },
  methods:{
    LongtapreplayFun: function (e) {  //长按回复
      console.log(e.currentTarget.dataset.userinfo)
      let userInfo = e.currentTarget.dataset.userinfo;
      //获取@people对象
      this.setData({
        commentIndex: e.currentTarget.dataset.commentindex,
        upReplaypeople: '@' + userInfo.nickename + ':'
      })
      wx.showToast({
        title: '@回复开启',
      })
    },
    openEditText: function () {
      //判断缓存中有没有授权信息，如果没有就显示弹窗，有就直接隐藏弹窗
      if (!wx.getStorageSync('userInfo')) {
        //调用检测登陆信息状态
        this.authorizeModal.checkUserLogin()
        return;
      }
      //隐藏底部评论
      this.setData({
        isInpArea: false,
        isEditArea: true
      })
      console.log(this.properties)
    },
    getUserInfo:function(e){  //接受授权组件用户信息传值
      console.log(e.detail.userInfo)
      if(e.detail){
        this.setData({
          userInfo: e.detail.userInfo,
          isLoginPoint: '请输入评论',
          isEditArea: true
        })
      }
    },
    bindBackFun: function () {  //返回上一级
      wx.navigateBack({
        delta: 1
      })
    },
    PraiseFun: function () {  //点赞
      let praisenum = this.data.praisenum;
      !this.data.ispraise ? ++praisenum : --praisenum;
      this.setData({
        praisenum: praisenum,
        ispraise: !this.data.ispraise
      })
    },
    CollectionFun: function () {  //收藏
      this.setData({
        iscollection: !this.data.iscollection
      })
    },
    InpEditblur: function (e) {
      let inpValue = e.detail.value;
      this.setData({
        commmentCont: inpValue,
        inpnumer: inpValue.length
      })
      console.log(this.data.ratings)
    },
    CancelBtnfun: function () {
      this.setData({
        isInpArea: true,
        isEditArea: false
      })
    },
    SureBtnfun: function () {  //完成确定提交
      this.CancelBtnfun();
      let commentObject = new Object;
      let beforeTimer = new Date();
      const Y = beforeTimer.getFullYear(),
        M = beforeTimer.getMonth(),
        D = beforeTimer.getDate(),
        Hr = beforeTimer.getHours(),
        Mt = beforeTimer.getMinutes(),
        Ms = beforeTimer.getSeconds();
      function NumcustomFun(num) {
        num = num < 10 ? ('0' + num) : num;
        return num;
      }
      let Timer = Y + '-' + NumcustomFun(M) + '-' + NumcustomFun(D) + ' ' + NumcustomFun(Hr) + ':' + NumcustomFun(Mt) + ':' + NumcustomFun(Ms);
      commentObject.timer = Timer;
      commentObject.content = this.data.commmentCont;
      commentObject.userinfo = this.data.userInfo;  //当前登陆回复用户
      if (this.data.upReplaypeople != null) { //回复提交
       
        let deforeRplayArray = this.data.ratings[this.data.commentIndex].replays; //当前评论回复数组
        console.log(deforeRplayArray)
        if (deforeRplayArray == undefined){  //评论从未回复
          let replays = new Array();
          this.data.ratings[this.data.commentIndex].replays = replays;
        }
        this.data.ratings[this.data.commentIndex].replays.push(commentObject);
      } else {
        this.data.ratings.push(commentObject);
      };
      console.log(commentObject)
      this.setData({
        upReplaypeople: null,
        ratings: this.data.ratings
      })
      console.log(Ms)
    }
  },
  lifetimes: {  //组件生命周期
    attached: function () {
      //获取登陆信息授权组件方法
      this.authorizeModal = this.selectComponent('#authorize-modal'); 
      if (!wx.getStorageSync('userInfo')) {  //未查询到缓存信息
        this.setData({
          isLoginPoint: '未登录'
        })
        return;
      }else{ //解决已经授权 页面无用户数据传输
        wx.getStorage({
          key: 'userInfo',
          success: (res) => {
            console.log(res)
            this.setData({
              userInfo:res.data.userInfo
            })
          }
        })
      }  
  }

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