// miniprogram/pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emojiList: [{
      image: '../../images/emoji/smilea_thumb.gif',
      tit: '[呵呵]',
    },
    {
      image: '../../images/emoji/tootha_thumb.gif',
      tit: '[嘻嘻]',
    },
    {
      image: '../../images/emoji/laugh.gif',
      tit: '[哈哈]',
    },
    {
      image: '../../images/emoji/kbsa_thumb.gif',
      tit: '[挖鼻屎]',
    },
    {
      image: '../../images/emoji/cool_thumb.gif',
      tit: '[酷]',
    },
    {
      image: '../../images/emoji/sweata_thumb.gif',
      tit: '[汗]',
    },
    {
      image: '../../images/emoji/dizzya_thumb.gif',
      tit: '[晕]',
    },
    {
      image: '../../images/emoji/sada_thumb.gif',
      tit: '[泪]',
    },
    {
      image: '../../images/emoji/cza_thumb.gif',
      tit: '[馋嘴]',
    },
    {
      image: '../../images/emoji/crazya_thumb.gif',
      tit: '[抓狂]',
    },
    {
      image: '../../images/emoji/hatea_thumb.gif',
      tit: '[哼]',
    },
    {
      image: '../../images/emoji/tza_thumb.gif',
      tit: '[可爱]',
    },
    {
      image: '../../images/emoji/angrya_thumb.gif',
      tit: '[怒]',
    },
    {
      image: '../../images/emoji/shamea_thumb.gif',
      tit: '[害羞]',
    },
    {
      image: '../../images/emoji/sleepa_thumb.gif',
      tit: '[睡觉]',
    },
    {
      image: '../../images/emoji/money_thumb.gif',
      tit: '[钱]',
    },
    {
      image: '../../images/emoji/cry.gif',
      tit: '[衰]',
    },
    {
      image: '../../images/emoji/bz_thumb.gif',
      tit: '[闭嘴]',
    },
    {
      image: '../../images/emoji/bs2_thumb.gif',
      tit: '[鄙视]',
    },
    {
      image: '../../images/emoji/hsa_thumb.gif',
      tit: '[花心]',
    },
    {
      image: '../../images/emoji/gza_thumb.gif',
      tit: '[鼓掌]',
    },
    {
      image: '../../images/emoji/bs_thumb.gif',
      tit: '[悲伤]',
    },
    {
      image: '../../images/emoji/sb_thumb.gif',
      tit: '[生病]',
    },
    {
      image: '../../images/emoji/qq_thumb.gif',
      tit: '[亲亲]',
    },
    {
      image: '../../images/emoji/zhh_thumb.gif',
      tit: '[左哼哼]',
    },
    {
      image: '../../images/emoji/yhh_thumb.gif',
      tit: '[右哼哼]',
    },
    {
      image: '../../images/emoji/x_thumb.gif',
      tit: '[嘘]',
    },
    {
      image: '../../images/emoji/kl_thumb.gif',
      tit: '[可怜]',
    },
    {
      image: '../../images/emoji/k_thumb.gif',
      tit: '[打哈欠]',
    },
    {
      image: '../../images/emoji/yw_thumb.gif',
      tit: '[疑问]',
    },
    {
      image: '../../images/emoji/88_thumb.gif',
      tit: '[拜拜]',
    },
    {
      image: '../../images/emoji/h_thumb.gif',
      tit: '[黑线]',
    },
    {
      image: '../../images/emoji/yx_thumb.gif',
      tit: '[阴性]',
    },
    {
      image: '../../images/emoji/hearta_thumb.gif',
      tit: '[爱心]',
    },
    {
      image: '../../images/emoji/unheart.gif',
      tit: '[心碎]',
    },
    {
      image: '../../images/emoji/ye_thumb.gif',
      tit: '[耶]',
    },
    {
      image: '../../images/emoji/good_thumb.gif',
      tit: '[good]',
    },
    {
      image: '../../images/emoji/ok_thumb.gif',
      tit: '[ok]',
    },
    {
      image: '../../images/emoji/vw_thumb.gif',
      tit: '[威武]',
    },
    {
      image: '../../images/emoji/geili_thumb.gif',
      tit: '[给力]',
    },
    {
      image: '../../images/emoji/wg_thumb.gif',
      tit: '[围观]',
    }
    ],
    emoji:true,
    inpemoji:'',
  },
  emojiSend:function(e){
    let emojiSrc = e.target.dataset.src;  // 获取到的表情路径
    let emojiArr = e.currentTarget.dataset.item;  // 表情对应的文字
    let emojiObject = this.data.emojiList;
    let nodeObj = '<image src='+emojiSrc +'></image>';
    console.log()
    this.setData({
      inpemoji: nodeObj
    })
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