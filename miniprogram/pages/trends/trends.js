Page({
  data: {
    topTab: [
      { id: "0", title: "每日一记", isSelect: true, path: "tabDiary" },
      { id: "1", title: "猜你喜欢", isSelect: false, path: "recommend" },
      { id: "2", title: "直播", isSelect: false, path: "onlineLive" }
    ],
    currentTab: 0
  },
  /**
   * topTab item点击事件
   */
  onIpItemClick: function (event) {
    console.log(event);
    var id = event.currentTarget.dataset.item.id;
    console.log(id);
    var curIndex = 0;  //存储id
    for (var i = 0; i < this.data.topTab.length; i++) {
      if (id == this.data.topTab[i].id) {
        this.data.topTab[i].isSelect = true;
        curIndex = i;
      } else {
        this.data.topTab[i].isSelect = false;
      }
    }
    this.setData({
      content: this.data.topTab[curIndex].title,
      currentTab: this.data.topTab[curIndex].id,
      topTab: this.data.topTab,
    });
  },
})